use image::{
   codecs::gif::{GifEncoder, Repeat},
   Delay, ImageBuffer, ImageResult, Rgba,
};
use js_sys::Error as JsError;
use qrcode::{
   bits::{Bits, ExtendedMode},
   EcLevel, QrCode, QrResult, Version,
};
use std::{error::Error as StdError, time::Duration};
use wasm_bindgen::prelude::wasm_bindgen;

const QR_CODE_MAX_CAPACITY: usize =
   520 /* byte, (version: 20, error correction level: L) */ - StructuredAppendHeader::LEN;
const QR_CODE_VERSION: Version = Version::Normal(15);
const QR_CODE_EC_LEVEL: EcLevel = EcLevel::L;
const QR_CODES_MAX_LEN: usize = 16;
const MAX_FILE_SIZE: usize = QR_CODE_MAX_CAPACITY * QR_CODES_MAX_LEN;

type QrCodeImage = ImageBuffer<Rgba<u8>, Vec<u8>>;

#[wasm_bindgen]
pub struct File {
   name: String,
   size: usize,
   buf: Vec<u8>,
}

impl File {
   fn calculate_parity(&self) -> u8 {
      self.buf.iter().fold(0, |acc, x| acc ^ x)
   }
}

#[wasm_bindgen]
impl File {
   #[wasm_bindgen(constructor)]
   pub fn new(name: String, buf: Vec<u8>) -> File {
      File {
         name,
         size: buf.len(),
         buf,
      }
   }
}

struct StructuredAppendHeader {
   index: usize,
   total: usize,
   parity: usize,
}

impl StructuredAppendHeader {
   const LEN: usize = 3; // byte (mode indicator: 4bit, index: 4 bit, total: 4 bit, parity: 8 bit)

   const fn new(index: usize, total: usize, parity: usize) -> StructuredAppendHeader {
      StructuredAppendHeader {
         index,
         total,
         parity,
      }
   }
}

fn to_js_error<E: StdError>(e: E) -> JsError {
   JsError::new(&format!("{:?}", e))
}

fn push_structured_append_header(bits: &mut Bits, header: StructuredAppendHeader) -> QrResult<()> {
   bits.push_mode_indicator(ExtendedMode::StructuredAppend)?;
   bits.push_number_checked(4, header.index)?; // first element of the sequence
   bits.push_number_checked(4, header.total - 1)?; // total length of the sequence (means 2)
   bits.push_number_checked(8, header.parity)?; //parity of the complete data
   Ok(())
}

fn generate_qr_code<D: AsRef<[u8]>>(buf: D, header: StructuredAppendHeader) -> QrResult<QrCode> {
   let mut bits = Bits::new(QR_CODE_VERSION);
   push_structured_append_header(&mut bits, header)?;
   bits.push_byte_data(buf.as_ref())?;
   bits.push_terminator(QR_CODE_EC_LEVEL)?;
   QrCode::with_bits(bits, QR_CODE_EC_LEVEL)
}

fn generate_qr_codes(file: &File) -> QrResult<Vec<QrCode>> {
   let len = (file.size / QR_CODE_MAX_CAPACITY) + 1;
   assert!(file.size <= MAX_FILE_SIZE);
   assert!(len <= QR_CODES_MAX_LEN);
   let parity = file.calculate_parity();
   (0..len)
      .map(|i| {
         generate_qr_code(
            &file.buf[i * QR_CODE_MAX_CAPACITY..((i + 1) * QR_CODE_MAX_CAPACITY).min(file.size)],
            StructuredAppendHeader::new(i, len, parity as usize),
         )
      })
      .collect::<QrResult<Vec<QrCode>>>()
}

fn qr_code_to_image(code: &QrCode) -> QrCodeImage {
   code.render::<Rgba<u8>>().build()
}

fn images_to_gif(images: &Vec<QrCodeImage>) -> ImageResult<Vec<u8>> {
   let mut bytes: Vec<u8> = Vec::new();
   {
      let mut encoder = GifEncoder::new(&mut bytes);
      encoder.set_repeat(Repeat::Infinite)?;
      let frames = images
         .iter()
         .map(|buf| {
            image::Frame::from_parts(
               buf.clone(),
               0,
               0,
               Delay::from_saturating_duration(Duration::from_millis(1000)),
            )
         })
         .collect::<Vec<image::Frame>>();
      encoder.encode_frames(frames)?;
   }
   Ok(bytes)
}

#[wasm_bindgen]
pub fn generate_gif(file: File) -> Result<Vec<u8>, JsError> {
   if file.size > MAX_FILE_SIZE {
      return Err(JsError::new(&format!(
         "File size is too big. Max file size is {} bytes.",
         MAX_FILE_SIZE
      )));
   }
   let codes = generate_qr_codes(&file).map_err(to_js_error)?;
   let images = codes
      .iter()
      .map(qr_code_to_image)
      .collect::<Vec<QrCodeImage>>();
   let gif = images_to_gif(&images).map_err(to_js_error)?;
   Ok(gif)
}

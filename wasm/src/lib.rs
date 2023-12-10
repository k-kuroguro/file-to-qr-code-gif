use image::{codecs::png::PngEncoder, EncodableLayout, ImageEncoder, ImageResult, Luma, Pixel};
use js_sys::Error as JsError;
use qrcode::{bits::Bits, EcLevel, QrCode, QrResult, Version};
use std::error::Error as StdError;
use wasm_bindgen::prelude::wasm_bindgen;

const QR_CODE_MAX_CAPACITY: usize = 858; // [B], version 20, error correction level L
const QR_CODE_VERSION: Version = Version::Normal(20);
const QR_CODE_EC_LEVEL: EcLevel = EcLevel::L;

#[wasm_bindgen]
pub struct File {
   name: String,
   size: usize,
   buf: Vec<u8>,
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

fn to_js_error<E: StdError>(e: E) -> JsError {
   JsError::new(&format!("{:?}", e))
}

fn generate_qr_code<D: AsRef<[u8]>>(buf: D) -> QrResult<QrCode> {
   let mut bits = Bits::new(QR_CODE_VERSION);
   bits.push_byte_data(buf.as_ref())?;
   bits.push_terminator(QR_CODE_EC_LEVEL)?;
   QrCode::with_bits(bits, QR_CODE_EC_LEVEL)
}

fn qr_code_to_image(code: &QrCode) -> ImageResult<Vec<u8>> {
   let image = code.render::<Luma<u8>>().build();
   let mut bytes: Vec<u8> = Vec::new();
   let encoder = PngEncoder::new(&mut bytes);
   encoder.write_image(
      image.as_bytes(),
      image.width(),
      image.height(),
      Luma::<u8>::COLOR_TYPE,
   )?;
   Ok(bytes)
}

#[wasm_bindgen]
pub fn generate_gif(file: File) -> Result<Vec<u8>, JsError> {
   let code_count = file.size / QR_CODE_MAX_CAPACITY;
   let codes = (0..code_count + 1)
      .map(|i| {
         generate_qr_code(
            &file.buf[i * QR_CODE_MAX_CAPACITY..((i + 1) * QR_CODE_MAX_CAPACITY).min(file.size)],
         )
      })
      .collect::<QrResult<Vec<QrCode>>>()
      .map_err(to_js_error)?;
   let images = codes
      .iter()
      .map(qr_code_to_image)
      .collect::<ImageResult<Vec<Vec<u8>>>>()
      .map_err(to_js_error)?;

   Ok(vec![])
}

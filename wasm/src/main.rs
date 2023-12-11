use image::{
   codecs::{self},
   gif::Repeat,
   Delay, EncodableLayout, ImageBuffer, Rgba,
};
use qrcode::{bits::Bits, EcLevel, QrCode, QrResult, Version};
use std::time::Duration;

const QR_CODE_MAX_CAPACITY: usize = 858; // [B], version 20, error correction level L
const QR_CODE_VERSION: Version = Version::Normal(20);
const QR_CODE_EC_LEVEL: EcLevel = EcLevel::L;
const QR_CODE_MAX_LEN: usize = 16;

pub struct File {
   name: String,
   size: usize,
   buf: Vec<u8>,
}

impl File {
   pub fn new(name: String, buf: Vec<u8>) -> File {
      File {
         name,
         size: buf.len(),
         buf,
      }
   }
}

fn generate_qr_code<D: AsRef<[u8]>>(buf: D) -> QrResult<QrCode> {
   let mut bits = Bits::new(QR_CODE_VERSION);
   bits.push_byte_data(buf.as_ref())?;
   bits.push_terminator(QR_CODE_EC_LEVEL)?;
   QrCode::with_bits(bits, QR_CODE_EC_LEVEL)
}

fn qr_code_to_image(code: &QrCode) -> ImageBuffer<Rgba<u8>, Vec<u8>> {
   let image = code.render::<Rgba<u8>>().build();
   image
}

pub fn generate_gif(file: File) -> Vec<u8> {
   let code_count = file.size / QR_CODE_MAX_CAPACITY;
   assert!(code_count + 1 <= QR_CODE_MAX_LEN);
   let codes = (0..code_count + 1)
      .map(|i| {
         generate_qr_code(
            &file.buf[i * QR_CODE_MAX_CAPACITY..((i + 1) * QR_CODE_MAX_CAPACITY).min(file.size)],
         )
      })
      .collect::<QrResult<Vec<QrCode>>>()
      .unwrap();
   let images = codes.iter().map(qr_code_to_image);
   let mut bytes: Vec<u8> = Vec::new();
   {
      let mut encoder = codecs::gif::GifEncoder::new(&mut bytes);
      encoder.set_repeat(Repeat::Infinite).unwrap();
      let frames = images
         .map(|f| {
            image::Frame::from_parts(
               f,
               0,
               0,
               Delay::from_saturating_duration(Duration::from_millis(1000)),
            )
         })
         .collect::<Vec<image::Frame>>();
      encoder.encode_frames(frames).unwrap();
   }
   bytes
}

fn main() {
   let f = std::fs::read("../deno.lock").unwrap();
   let file = File::new("test".to_string(), f.as_bytes().to_vec());
   let b = generate_gif(file);
   std::fs::write("test.gif", b).unwrap();
}

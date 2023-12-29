mod file;
mod qr_code;
mod qr_code_data_format;

use crate::file::File;
use crate::qr_code::{SAQrCodes, Version};
use crate::qr_code_data_format::{deserialize_file, serialize_file};
use image::{
   codecs::gif::{GifEncoder, Repeat},
   Delay, ImageBuffer, ImageResult, Rgba,
};
use js_sys::Error as JsError;
use lz4_flex::frame::{FrameDecoder, FrameEncoder};
use std::io::{Read, Write};
use std::{error::Error as StdError, time::Duration};
use wasm_bindgen::prelude::wasm_bindgen;

fn to_js_error<E: StdError>(e: E) -> JsError {
   JsError::new(&format!("{}", e))
}

type JsResult<T> = Result<T, JsError>;

fn compress_buf<D: AsRef<[u8]>>(buf: D) -> JsResult<Vec<u8>> {
   let ret = Vec::new();
   let mut encoder = FrameEncoder::new(ret);
   encoder.write_all(buf.as_ref()).map_err(to_js_error)?;
   Ok(encoder.finish().map_err(to_js_error)?)
}

fn decompress_buf<D: AsRef<[u8]>>(buf: D) -> JsResult<Vec<u8>> {
   let mut ret = Vec::new();
   let mut decoder = FrameDecoder::new(buf.as_ref());
   decoder.read_to_end(&mut ret).map_err(to_js_error)?;
   Ok(ret)
}

fn images_to_gif(images: &Vec<ImageBuffer<Rgba<u8>, Vec<u8>>>) -> ImageResult<Vec<u8>> {
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
pub fn generate_gif(file: &File, version: u16) -> JsResult<Vec<u8>> {
   let buf = compress_buf(serialize_file(file).map_err(to_js_error)?)?;
   let codes = SAQrCodes::new(&buf, Version::new(version)).map_err(to_js_error)?;
   let images = codes.render::<Rgba<u8>>();
   let gif = images_to_gif(&images).map_err(to_js_error)?;
   Ok(gif)
}

#[wasm_bindgen]
pub fn decode_to_file(buf: &[u8]) -> JsResult<File> {
   let file = deserialize_file(decompress_buf(buf)?).map_err(to_js_error)?;
   Ok(file)
}

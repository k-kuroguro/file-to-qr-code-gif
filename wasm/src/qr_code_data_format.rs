use crate::file::File;
use prost::{DecodeError, EncodeError, Message};

include!(concat!(env!("OUT_DIR"), "/qr_code_data_format.rs"));

pub fn serialize_file(file: &File) -> Result<Vec<u8>, EncodeError> {
   let data = QrCodeDataFormat {
      file_name: file.name(),
      file_content: file.buf(),
   };
   let mut buf = Vec::new();
   buf.reserve(data.encoded_len());
   data.encode(&mut buf)?;
   Ok(buf)
}

pub fn deserialize_file<D: AsRef<[u8]>>(buf: D) -> Result<File, DecodeError> {
   let data = QrCodeDataFormat::decode(buf.as_ref())?;
   Ok(File::new(data.file_name, data.file_content))
}

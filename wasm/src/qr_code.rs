use const_for::const_for;
use qrcode as qr_code_lib;
use std::fmt;

// Abbreviations
// SA: Structured Append

const CAPACITIES: [u16; 40] = [
   17, 32, 53, 78, 106, 134, 154, 192, 230, 271, 321, 367, 425, 458, 520, 586, 644, 718, 792, 858,
   929, 1003, 1091, 1171, 1273, 1367, 1465, 1528, 1628, 1732, 1840, 1952, 2068, 2188, 2303, 2431,
   2563, 2699, 2809, 2953,
]; // Data capacity for QR Code with EC level Low, in Bytes, sourced from JIS X 0510:2018, Pages 31-34, Table 7.
const EC_LEVEL: qr_code_lib::EcLevel = qr_code_lib::EcLevel::L;

#[derive(Clone, Copy, PartialEq, Eq, Debug)]
pub enum QrCodeError {
   FileSizeIsTooBig,
   QrCodeLibError(qr_code_lib::types::QrError),
}

impl From<qr_code_lib::types::QrError> for QrCodeError {
   fn from(e: qr_code_lib::types::QrError) -> QrCodeError {
      QrCodeError::QrCodeLibError(e)
   }
}

impl fmt::Display for QrCodeError {
   fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
      let string: String;
      let msg = match self {
         QrCodeError::FileSizeIsTooBig => "File size is too big.",
         QrCodeError::QrCodeLibError(e) => {
            string = format!("{}", e);
            &string
         }
      };
      fmt.write_str(msg)
   }
}

impl std::error::Error for QrCodeError {}

pub type QrCodeResult<T> = Result<T, QrCodeError>;

#[derive(Clone, Copy, Debug)]
pub struct Version {
   number: u16,
}

impl Version {
   pub const fn new(number: u16) -> Self {
      Self {
         number: match number {
            0 => 1,
            1..=40 => number,
            _ => 40,
         },
      }
   }
}

impl Into<qr_code_lib::Version> for Version {
   fn into(self) -> qr_code_lib::Version {
      qr_code_lib::Version::Normal(self.number as i16)
   }
}

#[derive(Clone, Debug)]
struct SAQrCodeHeader {
   index: u8,
   total: u8,
   parity: u8,
}

impl SAQrCodeHeader {
   const LEN: usize = 3; // byte (mode indicator: 4bit, index: 4 bit, total: 4 bit, parity: 8 bit)
   const MODE: qr_code_lib::bits::ExtendedMode = qr_code_lib::bits::ExtendedMode::StructuredAppend;

   const fn new(index: u8, total: u8, parity: u8) -> SAQrCodeHeader {
      SAQrCodeHeader {
         index,
         total,
         parity,
      }
   }

   fn push_to_bits(&self, bits: &mut qr_code_lib::bits::Bits) -> QrCodeResult<()> {
      bits.push_mode_indicator(Self::MODE)?;
      bits.push_number_checked(4, self.index as usize)?;
      bits.push_number_checked(4, self.total as usize - 1)?;
      bits.push_number_checked(8, self.parity as usize)?;
      Ok(())
   }
}

#[derive(Clone)]
struct SAQrCode {
   code: qr_code_lib::QrCode,
}

impl SAQrCode {
   fn new<D: AsRef<[u8]>>(buf: D, version: Version, header: SAQrCodeHeader) -> QrCodeResult<Self> {
      let mut bits = qr_code_lib::bits::Bits::new(version.into());
      header.push_to_bits(&mut bits)?;
      bits.push_byte_data(buf.as_ref())?;
      bits.push_terminator(EC_LEVEL)?;
      Ok(Self {
         code: qr_code_lib::QrCode::with_bits(bits, EC_LEVEL)?,
      })
   }

   fn render<P: qr_code_lib::render::Pixel>(&self) -> P::Image {
      self.code.render::<P>().build()
   }

   const fn get_capacity(version: Version) -> u16 {
      CAPACITIES[version.number as usize - 1] - SAQrCodeHeader::LEN as u16
   }
}

#[derive(Clone)]
pub struct SAQrCodes {
   codes: Vec<SAQrCode>,
}

impl SAQrCodes {
   const MAX_LEN: usize = 16;

   pub fn new<D: AsRef<[u8]>>(buf: D, version: Version) -> QrCodeResult<Self> {
      let buf = buf.as_ref();
      let total_capacity = Self::get_capacity(version);
      if buf.len() > total_capacity as usize {
         return Err(QrCodeError::FileSizeIsTooBig);
      }
      let code_capacity = SAQrCode::get_capacity(version);
      let len = (buf.len() / code_capacity as usize) + 1;
      let parity = Self::calculate_parity(buf);
      let codes = (0..len)
         .map(|i| {
            SAQrCode::new(
               &buf[i * code_capacity as usize..((i + 1) * code_capacity as usize).min(buf.len())],
               version,
               SAQrCodeHeader::new(i as u8, len as u8, parity),
            )
         })
         .collect::<QrCodeResult<Vec<SAQrCode>>>()?;
      Ok(Self { codes })
   }

   pub fn render<P: qr_code_lib::render::Pixel>(&self) -> Vec<P::Image> {
      self.codes.iter().map(|code| code.render::<P>()).collect()
   }

   const fn get_capacity(version: Version) -> u16 {
      SAQrCode::get_capacity(version) * Self::MAX_LEN as u16
   }

   const fn calculate_parity(buf: &[u8]) -> u8 {
      let mut parity = 0;
      const_for!(i in (0..buf.len()) => {
         parity ^= buf[i];
      });
      parity
   }
}

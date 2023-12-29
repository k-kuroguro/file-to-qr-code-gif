use wasm_bindgen::prelude::wasm_bindgen;

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

   #[wasm_bindgen(getter)]
   pub fn name(&self) -> String {
      self.name.clone()
   }

   #[wasm_bindgen(getter)]
   pub fn size(&self) -> usize {
      self.size
   }

   #[wasm_bindgen(getter)]
   pub fn buf(&self) -> Vec<u8> {
      self.buf.clone()
   }
}

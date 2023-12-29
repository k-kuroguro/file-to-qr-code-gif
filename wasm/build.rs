extern crate prost_build;

fn main() {
   prost_build::compile_protos(&["src/qr_code_data_format.proto"], &["src/"]).unwrap();
}

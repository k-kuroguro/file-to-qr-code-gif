import type { ReaderOptions } from "../bindings/index.ts";
import {
   getZXingModuleWithFactory,
   readBarcodesFromImageDataWithFactory,
   readBarcodesFromImageFileWithFactory,
   setZXingModuleOverridesWithFactory,
   type ZXingModuleOverrides,
   type ZXingReaderModule,
} from "../core.ts";
import zxingModuleFactory from "./zxing_reader.js";

export function getZXingModule(zxingModuleOverrides?: ZXingModuleOverrides) {
   return getZXingModuleWithFactory(
      zxingModuleFactory,
      zxingModuleOverrides,
   ) as Promise<ZXingReaderModule>;
}

export function setZXingModuleOverrides(
   zxingModuleOverrides: ZXingModuleOverrides,
) {
   return setZXingModuleOverridesWithFactory(
      zxingModuleFactory,
      zxingModuleOverrides,
   );
}

export async function readBarcodesFromImageFile(
   imageFile: Blob | File,
   readerOptions?: ReaderOptions,
) {
   return readBarcodesFromImageFileWithFactory(
      zxingModuleFactory,
      imageFile,
      readerOptions,
   );
}

export async function readBarcodesFromImageData(
   imageData: ImageData,
   readerOptions?: ReaderOptions,
) {
   return readBarcodesFromImageDataWithFactory(
      zxingModuleFactory,
      imageData,
      readerOptions,
   );
}

export * from "../bindings/exposedReaderBindings.ts";
export {
   purgeZXingModule, type ZXingModuleOverrides, type ZXingReaderModule
} from "../core.ts";


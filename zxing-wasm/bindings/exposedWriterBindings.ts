import { defaultWriterOptions as wo } from "./index.ts";
export const defaultWriterOptions = structuredClone(wo);

export {
   barcodeFormats, characterSets, writeInputEccLevels, type BarcodeFormat, type CharacterSet, type WriteInputBarcodeFormat, type WriteInputEccLevel, type WriteResult, type WriterOptions, type ZXingCharacterSet, type ZXingEnum,
   type ZXingWriteResult, type ZXingWriterOptions
} from "./index.ts";

export {
   /**
    * @deprecated renamed as `WriterOptions`
    */
   type WriterOptions as EncodeHints,
   /**
    * @deprecated renamed as `ZXingWriterOptions`
    */
   type ZXingWriterOptions as ZXingEncodeHints
} from "./index.ts";
export {
   /**
    * @deprecated renamed as `defaultWriterOptions`
    */
   defaultWriterOptions as defaultEncodeHints
};


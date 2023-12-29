import { defaultReaderOptions as ro } from "./index.ts";
export const defaultReaderOptions = structuredClone(ro);
export {
   barcodeFormats, binarizers, characterSets, contentTypes, eanAddOnSymbols, readOutputEccLevels, textModes, type BarcodeFormat, type Binarizer, type CharacterSet, type ContentType, type EanAddOnSymbol, type Point,
   type Position, type ReadInputBarcodeFormat,
   type ReadOutputBarcodeFormat, type ReadOutputEccLevel, type ReadResult, type ReaderOptions, type TextMode, type ZXingBinarizer, type ZXingCharacterSet, type ZXingContentType, type ZXingEanAddOnSymbol, type ZXingEnum,
   type ZXingPoint,
   type ZXingPosition, type ZXingReadResult, type ZXingReaderOptions, type ZXingTextMode, type ZXingVector
} from "./index.ts";

export {
   /**
    * @deprecated renamed as `ReaderOptions`
    */
   type ReaderOptions as DecodeHints,
   /**
    * @deprecated renamed as `ZXingReaderOptions`
    */
   type ZXingReaderOptions as ZXingDecodeHints
} from "./index.ts";
export {
   /**
    * @deprecated renamed as `defaultReaderOptions`
    */
   defaultReaderOptions as defaultDecodeHints
};


import { detect, Encoding } from 'encoding-japanese';
import mime from 'mime';
import React, { Dispatch, FC, SetStateAction, useRef, useState } from 'react';
import {
   Button,
   ButtonGroup,
   Col,
   Container,
   ProgressBar,
   Row,
} from 'react-bootstrap';
import { useErrorBoundary } from 'react-error-boundary';
import { BsX } from 'react-icons/bs';
import { AddToast, useToasts } from 'react-toast-notifications';
import { styled } from 'styled-components';
import { ReadResult } from 'zxing-wasm/reader';
import { wasmIsNotReadyError } from '../../utils/error.ts';
import useWasm, { WasmExports, WasmLoadState } from '../../utils/useWasm.tsx';
import QrCodeScanner from './QrCodeScanner.tsx';
import SAQrCodeDecoder, { Progress, SAQrCode } from './saQrCodeDecoder.ts';

type WasmDefFile = ReturnType<WasmExports['decode_to_file']>; // To avoid naming conflicts with File interface, defined as another name. `WasmExports['File']` doesn't work well.
type DecodeToFile = WasmExports['decode_to_file'];
type SetProgress = Dispatch<SetStateAction<Progress | null>>;
type SetFile = Dispatch<SetStateAction<WasmDefFile | null>>;

const Scanner = () => {
   const [progress, setProgress] = useState<Progress | null>(null);
   const [file, setFile] = useState<WasmDefFile | null>(null);
   const decoder = useRef(new SAQrCodeDecoder());
   const wasm = useWasm();
   const { addToast } = useToasts();
   const { showBoundary } = useErrorBoundary();

   return (
      <>
         {file
            ? (
               <ScanResult
                  file={file}
                  onReset={() => {
                     reset(setProgress, setFile, decoder.current);
                  }}
                  onDownload={downloadFile}
               />
            )
            : (
               progress && (
                  <>
                     <ResetButton
                        size={'9%'}
                        color={'#28a745'} // success color
                        onClick={() => {
                           reset(setProgress, setFile, decoder.current);
                        }}
                     />
                     <OverlayProgressBar
                        variant='success'
                        now={progress.current / progress.total * 100}
                        label={`${progress.current} / ${progress.total}`}
                     />
                  </>
               )
            )}
         <QrCodeScanner
            scanning={true}
            scanInterval={100}
            hidden={!!file}
            onError={(e) => onError(e, addToast)}
            onScan={(results) => {
               if (wasm.loadState !== WasmLoadState.Ready) {
                  showBoundary(wasmIsNotReadyError);
                  return;
               }
               onScan(
                  results,
                  setProgress,
                  setFile,
                  (e) => onError(e, addToast),
                  wasm.exports.decode_to_file,
                  decoder.current,
               );
            }}
         />
      </>
   );
};

const ScanResult: FC<
   { onReset: () => void; onDownload: (file: File) => void; file: File }
> = ({ file, onReset, onDownload }) => {
   return (
      <Container fluid>
         <Row>
            <Col>
               <ButtonGroup className='mt-2'>
                  <Button
                     variant='outline-success'
                     onClick={onReset}
                  >
                     Scan Again
                  </Button>
                  <Button
                     variant='outline-success'
                     onClick={() => onDownload(file)}
                  >
                     Download{` ${file.name}`}
                  </Button>
               </ButtonGroup>
            </Col>
         </Row>
      </Container>
   );
};

const OverlayProgressBar = styled(ProgressBar)`
   position: absolute;
   width: 70%;
   top: 25%;
   left: 50%;
   transform: translate(-50%, -50%);
`;

const ResetButton = styled(BsX)`
   position: absolute;
   top: 15%;
   left: 90%;
   transform: translate(-50%, -50%);
`;

const onError = (e: Error, addToast: AddToast) => {
   addToast(e.message, { appearance: 'error', autoDismiss: true });
};

const onScan = (
   results: ReadResult[],
   setProgress: SetProgress,
   setFile: SetFile,
   onError: (e: Error) => void,
   decodeToFile: DecodeToFile,
   qrCodeDecoder: SAQrCodeDecoder,
) => {
   if (results.length === 0) return;
   const result = results[0];
   if (result.format !== 'QRCode' || !result.sequenceId) return;

   const qrcode: SAQrCode = {
      index: result.sequenceIndex,
      total: result.sequenceSize,
      parity: Number(result.sequenceId),
      data: result.bytes,
   };
   qrCodeDecoder.add(qrcode);
   setProgress(qrCodeDecoder.getProgress() ?? null);

   const buf = qrCodeDecoder.decode();
   if (buf) {
      try {
         const file = decodeToFile(buf);
         setFile(file);
      } catch (e: unknown) {
         if (e instanceof Error) {
            onError(e);
         } else {
            onError(new Error(JSON.stringify(e)));
         }
      }
   }
};

const encoding_to_charset = (
   encoding: Encoding,
): string | undefined => {
   switch (encoding) {
      case 'UTF32':
         return 'UTF-32';
      case 'UTF16':
         return 'UTF-16';
      case 'UTF16BE':
         return 'UTF-16BE';
      case 'UTF16LE':
         return 'UTF-16LE';
      case 'JIS':
         return 'ISO-2022-JP';
      case 'EUCJP':
         return 'EUC-JP';
      case 'SJIS':
         return 'Shift_JIS';
      case 'UNICODE':
      case 'UTF8':
         return 'UTF-8';
      case 'AUTO':
      case 'ASCII':
      case 'BINARY':
         return undefined;
   }
};

const reset = (
   setProgress: SetProgress,
   setFile: SetFile,
   decoder: SAQrCodeDecoder,
) => {
   setProgress(null);
   setFile(null);
   decoder.reset();
};

const downloadFile = (file: File) => {
   let mimeType = mime.getType(file.name) ?? 'application/octet-stream';
   if (mimeType === 'text/plain') {
      const encoding = detect(file.buf);
      const charset = encoding ? encoding_to_charset(encoding) : undefined;
      if (charset) {
         mimeType += `;charset=${charset}`;
      }
   }
   const url = URL.createObjectURL(
      new Blob([file.buf], {
         type: mimeType,
      }),
   );
   const link = document.createElement('a');
   link.href = url;
   link.download = file.name;
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
   URL.revokeObjectURL(url);
};

export default Scanner;

import React, {
   Dispatch,
   FC,
   SetStateAction,
   useEffect,
   useRef,
   useState,
} from 'react';
import { readBarcodesFromImageData, ReadResult } from 'zxing-wasm/reader';
import Webcam from './Webcam.tsx';

type IntervalId = number | null;
type SetIntervalId = Dispatch<SetStateAction<IntervalId>>;
type QrCodeScannerProps = {
   onError?: (e: Error) => void;
   onScan?: (results: ReadResult[]) => void;
   scanning?: boolean;
   scanInterval?: number;
   hidden?: boolean;
};

const QrCodeScanner: FC<QrCodeScannerProps> = (
   {
      onError = (_e) => {},
      onScan = (_results) => {},
      scanning = false,
      scanInterval = 500,
      hidden = false,
   },
) => {
   const [intervalId, setIntervalId] = useState<IntervalId>(null);
   const webcam = useRef<Webcam>(null);

   useEffect(() => {
      scanning
         ? webcam.current && start(
            scanInterval,
            intervalId,
            setIntervalId,
            onScan,
            onError,
            webcam.current,
         )
         : stop(intervalId, setIntervalId);
      return (() => stop(intervalId, setIntervalId));
   }, [scanning, scanInterval, onScan, onError]);

   return (
      <>
         <Webcam
            ref={webcam}
            playing={scanning}
            facingMode={'environment'}
            hidden={hidden}
         />
      </>
   );
};

const start = (
   scanInterval: number,
   intervalId: IntervalId,
   setIntervalId: SetIntervalId,
   onScan: (result: ReadResult[]) => void,
   onError: (e: Error) => void,
   webcam: Webcam,
) => {
   if (intervalId) stop(intervalId, setIntervalId);
   const newIntervalId = setInterval(async () => {
      const imageData = webcam.capture();
      if (!imageData) return;
      try {
         const result = await readBarcodesFromImageData(imageData);
         if (result.length === 0) return;
         onScan(result);
      } catch (e) {
         onError(e);
      }
   }, scanInterval);
   setIntervalId(newIntervalId);
};

const stop = (intervalId: IntervalId, setIntervalId: SetIntervalId) => {
   if (!intervalId) return;
   clearInterval(intervalId);
   setIntervalId(null);
};

export default QrCodeScanner;

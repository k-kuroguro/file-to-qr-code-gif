import { BrowserQRCodeReader, IScannerControls } from '@zxing/browser';
import { Result } from '@zxing/library';
import React, { FC, useEffect, useRef } from 'react';

export const QrCodeReader: FC<{ onReadQRCode: (text: Result) => void }> = ({
   onReadQRCode,
}) => {
   const controlsRef = useRef<IScannerControls | null>();
   const videoRef = useRef<HTMLVideoElement>(null);

   useEffect(() => {
      if (!videoRef.current) {
         return;
      }
      const codeReader = new BrowserQRCodeReader();
      codeReader.decodeFromVideoDevice(
         undefined,
         videoRef.current,
         (result, error, controls) => {
            if (error) {
               return;
            }
            if (result) {
               onReadQRCode(result);
            }
            controlsRef.current = controls;
         },
      );
      return () => {
         if (!controlsRef.current) {
            return;
         }

         controlsRef.current.stop();
         controlsRef.current = null;
      };
   }, [onReadQRCode]);

   return (
      <video
         style={{ maxWidth: '100%', maxHeight: '100%', height: '100%' }}
         ref={videoRef}
      />
   );
};

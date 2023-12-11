import { Button } from '@material-ui/core';
import { Result } from '@zxing/library';
import React, { FC, useEffect, useState } from 'react';
import { render } from 'react-dom';
import { RingSpinnerOverlay } from 'react-spinner-overlay';
import { File, generate_gif, instantiate } from 'wasm';
import { QrCodeReader } from './components/QrCodeReader.tsx';

const QrCodeResult: FC<{ qrCodes: string[] }> = ({ qrCodes }) => {
   return (
      <div>
         {qrCodes.map((qrCode, index) => <div key={index}>{qrCode}</div>)}
      </div>
   );
};

const App = () => {
   const [wasm_loading, setWasmLoading] = useState(true);
   const [imageUrl, setImageUrl] = useState('');

   useEffect(() => {
      (async () => {
         await instantiate({
            url: new URL(
               'public/wasm_bg.wasm',
               new URL(location.origin + location.pathname),
            ),
         });
         setWasmLoading(false);
      })();
   }, []);

   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const data = new Uint8Array(await file.arrayBuffer());
      const wf = new File(file.name, data);
      console.log(data);
      const qr = generate_gif(wf);
      const blob = new Blob([qr], { type: 'image/png' });
      const imageUrl = URL.createObjectURL(blob);
      console.log(qr);
      console.log(imageUrl);
      setImageUrl(imageUrl);
   };

   const [reading, setReading] = useState(false);
   const onClick = () => {
      setReading((reading) => !reading);
   };

   const [str, setStr] = useState<string[]>([]);

   return (
      <>
         <Button variant='contained' color='primary' onClick={onClick}>
            toggle
         </Button>
         <div>{reading}</div>
         <RingSpinnerOverlay loading={wasm_loading} />
         <input type='file' onChange={handleFileChange} />
         <img src={imageUrl} />
         <QrCodeResult qrCodes={str} />
         <QrCodeReader
            onReadQRCode={(result: Result) => {
               setStr((texts) => [...texts, result.getText()]);
            }}
            reading={reading}
         />
      </>
   );
};

addEventListener(
   'DOMContentLoaded',
   () => render(<App />, document.getElementById('app')),
);

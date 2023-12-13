import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { RingSpinnerOverlay } from 'react-spinner-overlay';
import { File, generate_gif, instantiate } from 'wasm';

const App = () => {
   const [wasm_loading, setWasmLoading] = useState(true);
   const [imageUrl, setImageUrl] = useState('');

   const showError = (msg: string) => {
      message.error(msg);
   };

   useEffect(() => {
      (async () => {
         await instantiate({
            url: new URL(
               'wasm_bg.wasm',
               new URL(location.origin + location.pathname),
            ),
         });
         setWasmLoading(false);
      })();
   }, []);

   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
         const gif = generate_gif(
            new File(file.name, new Uint8Array(await file.arrayBuffer())),
         );
         const blob = new Blob([gif], { type: 'image/gif' });
         const imageUrl = URL.createObjectURL(blob);
         setImageUrl(imageUrl);
      } catch (e: unknown) {
         showError(e instanceof Error ? e.message : JSON.stringify(e));
      }
   };

   return (
      <>
         <RingSpinnerOverlay loading={wasm_loading} />
         <input type='file' onChange={handleFileChange} />
         <img src={imageUrl} />
      </>
   );
};

export default App;

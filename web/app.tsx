import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { RingSpinnerOverlay } from 'react-spinner-overlay';
import { File, generate_gif, instantiate } from "wasm";


const App = () => {
   const [count, setCount] = useState(0);
   const [wasm_loading, setWasmLoading] = useState(true);
   const [imageUrl, setImageUrl] = useState("");

   useEffect(() => {
      (async () => {
         await instantiate({ url: new URL('public/wasm_bg.wasm', new URL(location.origin + location.pathname)) });
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

   const add = (a: number, b: number) => a + b;


   return (
      <>
         <RingSpinnerOverlay loading={wasm_loading} />
         <div>count: {count}</div>
         <Button variant='contained' onClick={() => setCount(add(count, 2))}>Add 2</Button>
         <input type="file" onChange={handleFileChange} />
         <img src={imageUrl} />

      </>
   );
};

addEventListener('DOMContentLoaded', () => render(<App />, document.getElementById('app')));

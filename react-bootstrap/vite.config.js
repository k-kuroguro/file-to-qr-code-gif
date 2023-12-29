import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
   build: {
      outDir: resolve(__dirname, '../web/src'),
      emptyOutDir: false,
      lib: {
         entry: resolve(__dirname, 'src/main.ts'),
         name: 'react-bootstrap',
         fileName: 'js/react-bootstrap.generated',
         formats: ['es'],
      },
      rollupOptions: {
         external: ['react'],
         output: {
            assetFileNames: (assetInfo) => {
               if (assetInfo.name === 'style.css') {
                  return 'css/react-bootstrap.generated.css';
               }
               return assetInfo.name;
            },
            globals: {
               react: 'React',
            },
         },
      },
   },
});

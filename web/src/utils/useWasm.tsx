import React, {
   createContext,
   FC,
   ReactNode,
   useContext,
   useEffect,
   useState,
} from 'react';
import { instantiate } from 'wasm';

const WasmLoadState = {
   Ready: 'ready',
   Loading: 'loading',
   Error: 'error',
} as const;
type WasmLoadState = (typeof WasmLoadState)[keyof typeof WasmLoadState];
type WasmProviderProps = {
   src: string;
   children: ReactNode;
};
type WasmExports = Awaited<ReturnType<typeof instantiate>>;
type WasmState = {
   loadState: typeof WasmLoadState.Loading;
} | {
   loadState: typeof WasmLoadState.Error;
   error: Error;
} | {
   loadState: typeof WasmLoadState.Ready;
   exports: WasmExports;
};

const initialWasmState: WasmState = {
   loadState: WasmLoadState.Loading,
};
const WasmContext = createContext<WasmState>(initialWasmState);

const WasmProvider: FC<WasmProviderProps> = ({ src, children }) => {
   const [wasmState, setWasmState] = useState<WasmState>(initialWasmState);

   useEffect(() => {
      (async () => {
         try {
            const exports = await instantiate({
               url: new URL(src),
            });
            setWasmState({
               loadState: WasmLoadState.Ready,
               exports,
            });
         } catch (e) {
            setWasmState({
               loadState: WasmLoadState.Error,
               error: e,
            });
         }
      })();
   }, [src]);

   return (
      <WasmContext.Provider value={wasmState}>
         {children}
      </WasmContext.Provider>
   );
};

const useWasm = () => useContext(WasmContext);

export { WasmLoadState, WasmProvider };
export type { WasmExports, WasmState };
export default useWasm;

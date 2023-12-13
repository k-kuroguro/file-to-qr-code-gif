// @generated file from wasmbuild -- do not edit
// deno-lint-ignore-file
// deno-fmt-ignore-file
// source-hash: 3cdf6aad191c9f42f4f3a5c4a063183acd55253b
let wasm;

const cachedTextDecoder = typeof TextDecoder !== 'undefined'
   ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true })
   : {
      decode: () => {
         throw Error('TextDecoder not available');
      },
   };

if (typeof TextDecoder !== 'undefined') cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
   if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
      cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
   }
   return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
   ptr = ptr >>> 0;
   return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = typeof TextEncoder !== 'undefined'
   ? new TextEncoder('utf-8')
   : {
      encode: () => {
         throw Error('TextEncoder not available');
      },
   };

const encodeString = function (arg, view) {
   return cachedTextEncoder.encodeInto(arg, view);
};

function passStringToWasm0(arg, malloc, realloc) {
   if (realloc === undefined) {
      const buf = cachedTextEncoder.encode(arg);
      const ptr = malloc(buf.length, 1) >>> 0;
      getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
      WASM_VECTOR_LEN = buf.length;
      return ptr;
   }

   let len = arg.length;
   let ptr = malloc(len, 1) >>> 0;

   const mem = getUint8Memory0();

   let offset = 0;

   for (; offset < len; offset++) {
      const code = arg.charCodeAt(offset);
      if (code > 0x7F) break;
      mem[ptr + offset] = code;
   }

   if (offset !== len) {
      if (offset !== 0) {
         arg = arg.slice(offset);
      }
      ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
      const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
      const ret = encodeString(arg, view);

      offset += ret.written;
   }

   WASM_VECTOR_LEN = offset;
   return ptr;
}

function passArray8ToWasm0(arg, malloc) {
   const ptr = malloc(arg.length * 1, 1) >>> 0;
   getUint8Memory0().set(arg, ptr / 1);
   WASM_VECTOR_LEN = arg.length;
   return ptr;
}

function _assertClass(instance, klass) {
   if (!(instance instanceof klass)) {
      throw new Error(`expected instance of ${klass.name}`);
   }
   return instance.ptr;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
   if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
      cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
   }
   return cachedInt32Memory0;
}

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) {
   return heap[idx];
}

let heap_next = heap.length;

function dropObject(idx) {
   if (idx < 132) return;
   heap[idx] = heap_next;
   heap_next = idx;
}

function takeObject(idx) {
   const ret = getObject(idx);
   dropObject(idx);
   return ret;
}

function getArrayU8FromWasm0(ptr, len) {
   ptr = ptr >>> 0;
   return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
 * @param {File} file
 * @returns {Uint8Array}
 */
export function generate_gif(file) {
   try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(file, File);
      var ptr0 = file.__destroy_into_raw();
      wasm.generate_gif(retptr, ptr0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      var r3 = getInt32Memory0()[retptr / 4 + 3];
      if (r3) {
         throw takeObject(r2);
      }
      var v2 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_free(r0, r1 * 1, 1);
      return v2;
   } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
   }
}

function addHeapObject(obj) {
   if (heap_next === heap.length) heap.push(heap.length + 1);
   const idx = heap_next;
   heap_next = heap[idx];

   heap[idx] = obj;
   return idx;
}

const FileFinalization = new FinalizationRegistry((ptr) =>
   wasm.__wbg_file_free(ptr >>> 0)
);
/** */
export class File {
   __destroy_into_raw() {
      const ptr = this.__wbg_ptr;
      this.__wbg_ptr = 0;
      FileFinalization.unregister(this);
      return ptr;
   }

   free() {
      const ptr = this.__destroy_into_raw();
      wasm.__wbg_file_free(ptr);
   }
   /**
    * @param {string} name
    * @param {Uint8Array} buf
    */
   constructor(name, buf) {
      const ptr0 = passStringToWasm0(
         name,
         wasm.__wbindgen_malloc,
         wasm.__wbindgen_realloc,
      );
      const len0 = WASM_VECTOR_LEN;
      const ptr1 = passArray8ToWasm0(buf, wasm.__wbindgen_malloc);
      const len1 = WASM_VECTOR_LEN;
      const ret = wasm.file_new(ptr0, len0, ptr1, len1);
      this.__wbg_ptr = ret >>> 0;
      return this;
   }
}

const imports = {
   __wbindgen_placeholder__: {
      __wbg_new_a64e3f2afc2cf2f8: function (arg0, arg1) {
         const ret = new Error(getStringFromWasm0(arg0, arg1));
         return addHeapObject(ret);
      },
      __wbindgen_throw: function (arg0, arg1) {
         throw new Error(getStringFromWasm0(arg0, arg1));
      },
   },
};

import { Loader } from 'https://deno.land/x/wasmbuild@0.15.4/loader.ts';
import { cacheToLocalDir } from 'https://deno.land/x/wasmbuild@0.15.4/cache.ts';

const loader = new Loader({
   imports,
   cache: cacheToLocalDir,
});
/**
 * Decompression callback
 *
 * @callback DecompressCallback
 * @param {Uint8Array} compressed
 * @return {Uint8Array} decompressed
 */

/**
 * Options for instantiating a Wasm instance.
 * @typedef {Object} InstantiateOptions
 * @property {URL=} url - Optional url to the Wasm file to instantiate.
 * @property {DecompressCallback=} decompress - Callback to decompress the
 * raw Wasm file bytes before instantiating.
 */

/** Instantiates an instance of the Wasm module returning its functions.
 * @remarks It is safe to call this multiple times and once successfully
 * loaded it will always return a reference to the same object.
 * @param {InstantiateOptions=} opts
 */
export async function instantiate(opts) {
   return (await instantiateWithInstance(opts)).exports;
}

/** Instantiates an instance of the Wasm module along with its exports.
 * @remarks It is safe to call this multiple times and once successfully
 * loaded it will always return a reference to the same object.
 * @param {InstantiateOptions=} opts
 * @returns {Promise<{
 *   instance: WebAssembly.Instance;
 *   exports: { generate_gif: typeof generate_gif; File : typeof File  }
 * }>}
 */
export async function instantiateWithInstance(opts) {
   const { instance } = await loader.load(
      opts?.url ?? new URL('wasm_bg.wasm', import.meta.url),
      opts?.decompress,
   );
   wasm = wasm ?? instance.exports;
   cachedInt32Memory0 = cachedInt32Memory0 ??
      new Int32Array(wasm.memory.buffer);
   cachedUint8Memory0 = cachedUint8Memory0 ??
      new Uint8Array(wasm.memory.buffer);
   return {
      instance,
      exports: getWasmInstanceExports(),
   };
}

function getWasmInstanceExports() {
   return { generate_gif, File };
}

/** Gets if the Wasm module has been instantiated. */
export function isInstantiated() {
   return loader.instance != null;
}

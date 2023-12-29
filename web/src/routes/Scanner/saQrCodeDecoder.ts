type SAQrCode = {
   index: number;
   total: number;
   parity: number;
   data: Uint8Array;
};
type Progress = {
   total: number;
   current: number;
};


class SAQrCodeDecoder /* Structured Append QR Code Decoder */ {
   private total?: number;
   private parity?: number;
   private dataWithIndex: [number, Uint8Array][] = [];
   private addedIndices: Set<number> = new Set();

   public constructor() { }

   public add(qrcode: SAQrCode) {
      const { index, total, parity, data } = qrcode;
      if (this.addedIndices.has(index)) return;
      if (this.total === undefined) this.total = total;
      if (this.parity === undefined) this.parity = parity;
      if (this.total !== total || this.parity != parity) return;
      this.addedIndices.add(index);
      this.dataWithIndex.push([index, data]);
      return;
   }

   public reset() {
      this.total = undefined;
      this.parity = undefined;
      this.dataWithIndex = [];
      this.addedIndices = new Set();
   }

   public decode(): Uint8Array | undefined {
      if (!this.isComplete()) return;

      const sorted_dataWithIndex = this.dataWithIndex.sort(([a], [b]) => a - b);
      return concat(sorted_dataWithIndex.map(([_, data]) => data));
   }

   public isComplete(): boolean {
      if (this.total === undefined || this.parity === undefined) return false;
      return this.addedIndices.size === this.total;
   }

   public getProgress(): Progress | undefined {
      if (this.total === undefined) return;
      return {
         total: this.total,
         current: this.addedIndices.size,
      };
   }
}

const concat = (arrays: Uint8Array[]): Uint8Array => {
   const totalLength = arrays.reduce((acc, value) => acc + value.length, 0);
   const result = new Uint8Array(totalLength);
   let length = 0;
   for (const array of arrays) {
      result.set(array, length);
      length += array.length;
   }
   return result;
}

export type { Progress, SAQrCode };
export default SAQrCodeDecoder;

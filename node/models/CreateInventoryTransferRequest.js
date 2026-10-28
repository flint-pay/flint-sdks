import { d176 as c0 } from '../descriptors/data/9.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4093 as c1 } from '../descriptors/data/174.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d176 as d176 } from '../descriptors/data/9.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d176;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryTransferRequest"]:c0(),["InventoryTransferLineRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

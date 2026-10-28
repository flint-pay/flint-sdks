import { d4754 as c0, d4755 as c1 } from '../descriptors/data/214.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4754 as d4754 } from '../descriptors/data/214.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4754;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateProductOptionRequest"]:c0(),["UpdateProductOptionValueRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductOptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

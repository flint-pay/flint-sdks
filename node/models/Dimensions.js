import { d2999 as c0 } from '../descriptors/data/114.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2999 as d2999 } from '../descriptors/data/114.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2999;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dimensions"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDimensions(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

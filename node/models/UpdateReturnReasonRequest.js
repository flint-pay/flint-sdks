import { d4932 as c0 } from '../descriptors/data/224.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2481 as c1 } from '../descriptors/data/100.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2481 as d2481 } from '../descriptors/data/100.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2481;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1226"]:c0(),["UpdateReturnReasonRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReasonRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

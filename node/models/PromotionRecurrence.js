import { d4398 as c0, d4399 as c1, d4400 as c2, d4401 as c3, d4402 as c4, d4403 as c5 } from '../descriptors/data/192.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4398 as d4398 } from '../descriptors/data/192.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4398;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrence"]:c0(),["SharedCodec1029"]:c1(),["SharedCodec1030"]:c2(),["SharedCodec1031"]:c3(),["SharedCodec1032"]:c4(),["SharedCodec1033"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrence(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

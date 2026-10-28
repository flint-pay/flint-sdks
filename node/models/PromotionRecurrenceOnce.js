import { d878 as c0 } from '../descriptors/data/38.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4400 as c1 } from '../descriptors/data/192.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d878 as d878 } from '../descriptors/data/38.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d878;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceOnce"]:c0(),["SharedCodec1030"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceOnce(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

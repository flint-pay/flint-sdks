import { d877 as c0 } from '../descriptors/data/38.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4403 as c1 } from '../descriptors/data/192.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d877 as d877 } from '../descriptors/data/38.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d877;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceForever"]:c0(),["SharedCodec1033"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceForever(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

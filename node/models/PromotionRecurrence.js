import { d4398 as c0, d4399 as c1, d4400 as c2, d4401 as c3, d4402 as c4, d4403 as c5 } from '../descriptors/data/192.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4398 as d4398 } from '../descriptors/data/192.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4398;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrence"]:c0(),["SharedCodec1029"]:c1(),["SharedCodec1030"]:c2(),["SharedCodec1031"]:c3(),["SharedCodec1032"]:c4(),["SharedCodec1033"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrence(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

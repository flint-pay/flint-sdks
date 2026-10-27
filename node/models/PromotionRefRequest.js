import { d3811 as c0, d3812 as c1, d3813 as c2 } from '../descriptors/data/159.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3811 as d3811 } from '../descriptors/data/159.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3811;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRefRequest"]:c0(),["SharedCodec1038"]:c1(),["SharedCodec1039"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRefRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

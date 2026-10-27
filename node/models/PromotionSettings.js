import { d5083 as c0 } from '../descriptors/data/233.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d5083 as d5083 } from '../descriptors/data/233.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5083;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionSettings"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

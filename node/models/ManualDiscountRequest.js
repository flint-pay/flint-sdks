import { d3810 as c0 } from '../descriptors/data/159.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3810 as d3810 } from '../descriptors/data/159.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3810;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ManualDiscountRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeManualDiscountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

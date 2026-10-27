import { d4016 as c0, d4018 as c1 } from '../descriptors/data/170.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3467 as c2 } from '../descriptors/data/141.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2445 as c3 } from '../descriptors/data/97.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2445 as d2445 } from '../descriptors/data/97.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2445;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAllocationConfigurationValue"]:c0(),["InventoryAllocationPolicyLocation"]:c1(),["SharedCodec1179"]:c2(),["UpdateInventoryAllocationPolicyRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryAllocationPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

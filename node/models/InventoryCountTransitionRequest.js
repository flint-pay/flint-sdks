import { d676 as c0 } from '../descriptors/data/29.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4038 as c1, d4039 as c2 } from '../descriptors/data/171.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d676 as d676 } from '../descriptors/data/29.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d676;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryCountTransitionRequest"]:c0(),["SharedCodec846"]:c1(),["SharedCodec847"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

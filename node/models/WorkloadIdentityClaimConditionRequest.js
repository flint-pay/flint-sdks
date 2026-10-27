import { d5249 as c0 } from '../descriptors/data/242.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d5249 as d5249 } from '../descriptors/data/242.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5249;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["WorkloadIdentityClaimConditionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWorkloadIdentityClaimConditionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d3031 as c0 } from '../descriptors/data/117.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3059 as c1 } from '../descriptors/data/119.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d5241 as c2, d5246 as c3, d5249 as c5 } from '../descriptors/data/242.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2502 as c4 } from '../descriptors/data/102.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2502 as d2502 } from '../descriptors/data/102.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2502;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1"]:c0(),["SharedCodec1171"]:c1(),["SharedCodec1252"]:c2(),["SharedCodec239"]:c3(),["UpdateWorkloadIdentityRequest"]:c4(),["WorkloadIdentityClaimConditionRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

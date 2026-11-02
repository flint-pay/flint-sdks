import { d332 as c0 } from '../descriptors/data/19.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4333 as c1 } from '../descriptors/data/183.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4300 as c2 } from '../descriptors/data/181.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6197 as c3 } from '../descriptors/data/287.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d332 as d332 } from '../descriptors/data/19.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d332;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWorkloadIdentityRequest"]:c0(),["SharedCodec2"]:c1(),["SharedCodec3"]:c2(),["WorkloadIdentityClaimConditionRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

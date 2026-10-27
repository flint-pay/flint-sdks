import { d246 as c0 } from '../descriptors/data/14.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3031 as c1 } from '../descriptors/data/117.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5246 as c2, d5249 as c3 } from '../descriptors/data/242.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d246 as d246 } from '../descriptors/data/14.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d246;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWorkloadIdentityRequest"]:c0(),["SharedCodec1"]:c1(),["SharedCodec239"]:c2(),["WorkloadIdentityClaimConditionRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

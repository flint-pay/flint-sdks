import { d5249 as c0 } from '../descriptors/data/242.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5249 as d5249 } from '../descriptors/data/242.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5249;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["WorkloadIdentityClaimConditionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWorkloadIdentityClaimConditionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

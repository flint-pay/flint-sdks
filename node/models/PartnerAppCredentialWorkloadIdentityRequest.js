import { d6166 as c0 } from '../descriptors/data/285.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6197 as c1 } from '../descriptors/data/287.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6166 as d6166 } from '../descriptors/data/285.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6166;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAppCredentialWorkloadIdentityRequest"]:c0(),["WorkloadIdentityClaimConditionRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppCredentialWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

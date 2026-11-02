import { d261 as c0 } from '../descriptors/data/14.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6162 as c1, d6164 as c2, d6166 as c3 } from '../descriptors/data/285.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6183 as c4, d6184 as c5, d6185 as c6 } from '../descriptors/data/286.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6197 as c7 } from '../descriptors/data/287.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d261 as d261 } from '../descriptors/data/14.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d261;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppCredentialRequest"]:c0(),["PartnerAppCredentialJWKSURLRequest"]:c1(),["PartnerAppCredentialPublicKeyRequest"]:c2(),["PartnerAppCredentialWorkloadIdentityRequest"]:c3(),["SharedCodec276"]:c4(),["SharedCodec277"]:c5(),["SharedCodec278"]:c6(),["WorkloadIdentityClaimConditionRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppCredentialRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

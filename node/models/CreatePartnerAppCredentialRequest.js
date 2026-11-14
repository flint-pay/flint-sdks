import { d315 as c0 } from '../descriptors/data/18.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7861 as c1, d7863 as c2, d7865 as c3 } from '../descriptors/data/380.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7916 as c4, d7917 as c5, d7918 as c6, d7920 as c7 } from '../descriptors/data/382.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d315 as d315 } from '../descriptors/data/18.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d315;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppCredentialRequest"]:c0(),["PartnerAppCredentialJWKSURLRequest"]:c1(),["PartnerAppCredentialPublicKeyRequest"]:c2(),["PartnerAppCredentialWorkloadIdentityRequest"]:c3(),["SharedCodec362"]:c4(),["SharedCodec363"]:c5(),["SharedCodec364"]:c6(),["WorkloadIdentityClaimConditionRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppCredentialRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

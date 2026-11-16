import { d345 as c0 } from '../descriptors/data/19.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9713 as c1, d9715 as c2, d9717 as c3 } from '../descriptors/data/448.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9768 as c4, d9769 as c5, d9770 as c6, d9772 as c7 } from '../descriptors/data/450.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d345 as d345 } from '../descriptors/data/19.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d345;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppCredentialRequest"]:c0(),["PartnerAppCredentialJWKSURLRequest"]:c1(),["PartnerAppCredentialPublicKeyRequest"]:c2(),["PartnerAppCredentialWorkloadIdentityRequest"]:c3(),["SharedCodec503"]:c4(),["SharedCodec504"]:c5(),["SharedCodec505"]:c6(),["WorkloadIdentityClaimConditionRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppCredentialRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

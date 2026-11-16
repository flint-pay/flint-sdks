import { d314 as c0 } from '../descriptors/data/18.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7887 as c1, d7889 as c2, d7891 as c3 } from '../descriptors/data/379.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7942 as c4 } from '../descriptors/data/381.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7943 as c5, d7944 as c6, d7946 as c7 } from '../descriptors/data/382.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d314 as d314 } from '../descriptors/data/18.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d314;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppCredentialRequest"]:c0(),["PartnerAppCredentialJWKSURLRequest"]:c1(),["PartnerAppCredentialPublicKeyRequest"]:c2(),["PartnerAppCredentialWorkloadIdentityRequest"]:c3(),["SharedCodec356"]:c4(),["SharedCodec357"]:c5(),["SharedCodec358"]:c6(),["WorkloadIdentityClaimConditionRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppCredentialRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

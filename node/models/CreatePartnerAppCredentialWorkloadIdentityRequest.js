import { d315 as c0 } from '../descriptors/data/18.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7891 as c1 } from '../descriptors/data/379.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7946 as c2 } from '../descriptors/data/382.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d315 as d315 } from '../descriptors/data/18.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d315;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppCredentialWorkloadIdentityRequest"]:c0(),["PartnerAppCredentialWorkloadIdentityRequest"]:c1(),["WorkloadIdentityClaimConditionRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppCredentialWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

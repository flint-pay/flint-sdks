import { d6225 as c0 } from '../descriptors/data/288.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6256 as c1 } from '../descriptors/data/289.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6225 as d6225 } from '../descriptors/data/288.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6225;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAppCredentialWorkloadIdentityRequest"]:c0(),["WorkloadIdentityClaimConditionRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppCredentialWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

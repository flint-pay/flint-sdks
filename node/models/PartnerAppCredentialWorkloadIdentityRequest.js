import { d9807 as c0 } from '../descriptors/data/451.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9862 as c1 } from '../descriptors/data/453.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9807 as d9807 } from '../descriptors/data/451.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9807;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAppCredentialWorkloadIdentityRequest"]:c0(),["WorkloadIdentityClaimConditionRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppCredentialWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

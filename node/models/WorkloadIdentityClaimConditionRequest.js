import { d9862 as c0 } from '../descriptors/data/453.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9862 as d9862 } from '../descriptors/data/453.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9862;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["WorkloadIdentityClaimConditionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWorkloadIdentityClaimConditionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

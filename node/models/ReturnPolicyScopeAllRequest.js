import { d1768 as c0 } from '../descriptors/data/88.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10321 as c1 } from '../descriptors/data/482.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1768 as d1768 } from '../descriptors/data/88.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1768;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeAllRequest"]:c0(),["SharedCodec2733"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeAllRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

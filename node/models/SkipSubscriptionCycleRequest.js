import { d7369 as c0 } from '../descriptors/data/308.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7369 as d7369 } from '../descriptors/data/308.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7369;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SkipSubscriptionCycleRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSkipSubscriptionCycleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

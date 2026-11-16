import { d1689 as c0 } from '../descriptors/data/83.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1689 as d1689 } from '../descriptors/data/83.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1689;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RememberedBuyerTokenRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRememberedBuyerTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

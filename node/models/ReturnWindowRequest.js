import { d10306 as c0 } from '../descriptors/data/481.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10306 as d10306 } from '../descriptors/data/481.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10306;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnWindowRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnWindowRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

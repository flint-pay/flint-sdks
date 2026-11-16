import { d9561 as c0 } from '../descriptors/data/437.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9561 as d9561 } from '../descriptors/data/437.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9561;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TextModifierConfigRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTextModifierConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

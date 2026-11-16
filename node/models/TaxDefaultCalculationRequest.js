import { d7534 as c0 } from '../descriptors/data/315.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7534 as d7534 } from '../descriptors/data/315.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7534;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TaxDefaultCalculationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxDefaultCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

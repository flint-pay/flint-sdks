import { d128 as c0 } from '../descriptors/data/6.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8570 as c1, d8571 as c2 } from '../descriptors/data/378.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8579 as c3, d8580 as c4 } from '../descriptors/data/379.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d128 as d128 } from '../descriptors/data/6.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d128;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequestCannotCalculate"]:c0(),["SharedCodec201"]:c1(),["SharedCodec202"]:c2(),["SharedCodec210"]:c3(),["SharedCodec211"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

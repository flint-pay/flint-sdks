import { d8388 as c0 } from '../descriptors/data/368.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c1 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8388 as d8388 } from '../descriptors/data/368.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8388;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCallerSuppliedPricingStrategyRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCallerSuppliedPricingStrategyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

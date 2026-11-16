import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8075 as c1 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1447 as c2 } from '../descriptors/data/72.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9958 as c3 } from '../descriptors/data/459.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9967 as c4, d9968 as c5 } from '../descriptors/data/460.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1447 as d1447 } from '../descriptors/data/72.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1447;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemInputBundle"]:c2(),["SharedCodec2136"]:c3(),["SharedCodec2160"]:c4(),["SharedCodec2161"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemInputBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

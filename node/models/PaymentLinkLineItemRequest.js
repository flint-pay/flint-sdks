import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8075 as c1 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9933 as c2 } from '../descriptors/data/458.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9958 as c3 } from '../descriptors/data/459.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9963 as c4, d9964 as c5, d9966 as c6, d9967 as c7, d9968 as c8, d9969 as c9, d9970 as c10 } from '../descriptors/data/460.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9975 as c11, d9976 as c12 } from '../descriptors/data/461.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9977 as c13, d9978 as c14 } from '../descriptors/data/462.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9933 as d9933 } from '../descriptors/data/458.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9933;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["SharedCodec2136"]:c3(),["SharedCodec2141"]:c4(),["SharedCodec2142"]:c5(),["SharedCodec2144"]:c6(),["SharedCodec2160"]:c7(),["SharedCodec2161"]:c8(),["SharedCodec2162"]:c9(),["SharedCodec2163"]:c10(),["SharedCodec2170"]:c11(),["SharedCodec2171"]:c12(),["SharedCodec2172"]:c13(),["SharedCodec2173"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

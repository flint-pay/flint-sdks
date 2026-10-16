import { d649 as c0, d652 as c1, d659 as c2, d660 as c3, d661 as c4, d748 as c5, d323 as c6, d1823 as c7, d1824 as c8, d2178 as c9, d2179 as c10, d14 as c11, d1822 as c12, d2662 as c13 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d660 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d660;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfile"]:c0(),["DeliveryProfileConfiguration"]:c1(),["DeliveryProfileDiagnostics"]:c2(),["DeliveryProfileListResponse"]:c3(),["DeliveryProfileOriginPolicy"]:c4(),["Dimensions"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec467"]:c12(),["Weight"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d575 as c0, d578 as c1, d634 as c2, d635 as c3, d672 as c4, d673 as c5, d715 as c6, d726 as c7, d729 as c8, d730 as c9, d323 as c10, d1823 as c11, d1824 as c12, d2178 as c13, d2179 as c14, d14 as c15, d728 as c16, d1822 as c17, d306 as c18 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d730 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d730;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryDistance"]:c1(),["DeliveryPostalCodeCondition"]:c2(),["DeliveryPostalCodeValue"]:c3(),["DeliveryRadiusCondition"]:c4(),["DeliveryRadiusOrigin"]:c5(),["DeliveryStateCondition"]:c6(),["DeliveryZone"]:c7(),["DeliveryZoneConfiguration"]:c8(),["DeliveryZoneListResponse"]:c9(),["MoneyValue"]:c10(),["NextAction"]:c11(),["NextActionMerchantAccountSession"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec1"]:c15(),["SharedCodec222"]:c16(),["SharedCodec467"]:c17(),["SharedCodec89"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

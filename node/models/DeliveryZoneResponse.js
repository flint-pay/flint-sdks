import { d598 as c0, d601 as c1, d651 as c2, d652 as c3, d691 as c4, d692 as c5, d732 as c6, d743 as c7, d746 as c8, d748 as c9, d77 as c10, d1823 as c11, d1822 as c12, d2157 as c13, d2158 as c14, d14 as c15, d336 as c16, d745 as c17, d1821 as c18 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d748 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d748;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryDistance"]:c1(),["DeliveryPostalCodeCondition"]:c2(),["DeliveryPostalCodeValue"]:c3(),["DeliveryRadiusCondition"]:c4(),["DeliveryRadiusOrigin"]:c5(),["DeliveryStateCondition"]:c6(),["DeliveryZone"]:c7(),["DeliveryZoneConfiguration"]:c8(),["DeliveryZoneResponse"]:c9(),["MoneyValue"]:c10(),["NextAction"]:c11(),["NextActionMerchantAccountSession"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec1"]:c15(),["SharedCodec113"]:c16(),["SharedCodec240"]:c17(),["SharedCodec487"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

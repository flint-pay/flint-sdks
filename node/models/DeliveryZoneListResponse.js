import { d565 as c0, d568 as c1, d624 as c2, d625 as c3, d662 as c4, d663 as c5, d705 as c6, d716 as c7, d719 as c8, d720 as c9, d323 as c10, d1820 as c11, d1821 as c12, d2162 as c13, d2163 as c14, d14 as c15, d718 as c16, d1819 as c17, d306 as c18 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d720 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d720;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryDistance"]:c1(),["DeliveryPostalCodeCondition"]:c2(),["DeliveryPostalCodeValue"]:c3(),["DeliveryRadiusCondition"]:c4(),["DeliveryRadiusOrigin"]:c5(),["DeliveryStateCondition"]:c6(),["DeliveryZone"]:c7(),["DeliveryZoneConfiguration"]:c8(),["DeliveryZoneListResponse"]:c9(),["MoneyValue"]:c10(),["NextAction"]:c11(),["NextActionMerchantAccountSession"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec1"]:c15(),["SharedCodec216"]:c16(),["SharedCodec466"]:c17(),["SharedCodec89"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

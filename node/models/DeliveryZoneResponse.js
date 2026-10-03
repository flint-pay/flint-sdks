import { d582 as c0, d585 as c1, d636 as c2, d637 as c3, d673 as c4, d674 as c5, d714 as c6, d725 as c7, d728 as c8, d730 as c9, d74 as c10, d1784 as c11, d1783 as c12, d2118 as c13, d2119 as c14, d323 as c15, d727 as c16 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d730 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d730;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryDistance"]:c1(),["DeliveryPostalCodeCondition"]:c2(),["DeliveryPostalCodeValue"]:c3(),["DeliveryRadiusCondition"]:c4(),["DeliveryRadiusOrigin"]:c5(),["DeliveryStateCondition"]:c6(),["DeliveryZone"]:c7(),["DeliveryZoneConfiguration"]:c8(),["DeliveryZoneResponse"]:c9(),["MoneyValue"]:c10(),["NextAction"]:c11(),["NextActionMerchantAccountSession"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec110"]:c15(),["SharedCodec233"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

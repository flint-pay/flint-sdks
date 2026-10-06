import { d598 as c0, d599 as c1, d600 as c2, d601 as c3, d605 as c4, d651 as c5, d652 as c6, d691 as c7, d692 as c8, d732 as c9, d742 as c10, d744 as c11, d604 as c12, d283 as c13 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d605 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d605;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerGroupCondition"]:c2(),["DeliveryDistance"]:c3(),["DeliveryEligibilityExpression"]:c4(),["DeliveryPostalCodeCondition"]:c5(),["DeliveryPostalCodeValue"]:c6(),["DeliveryRadiusCondition"]:c7(),["DeliveryRadiusOrigin"]:c8(),["DeliveryStateCondition"]:c9(),["DeliveryWindowTimeCondition"]:c10(),["DeliveryZoneCondition"]:c11(),["SharedCodec206"]:c12(),["SharedCodec74"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEligibilityExpression(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

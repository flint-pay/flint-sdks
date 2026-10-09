import { d565 as c0, d566 as c1, d567 as c2, d568 as c3, d573 as c4, d624 as c5, d625 as c6, d633 as c7, d662 as c8, d663 as c9, d675 as c10, d705 as c11, d715 as c12, d717 as c13, d323 as c14, d572 as c15, d571 as c16 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d675 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d675;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerGroupCondition"]:c2(),["DeliveryDistance"]:c3(),["DeliveryEligibilityExpression"]:c4(),["DeliveryPostalCodeCondition"]:c5(),["DeliveryPostalCodeValue"]:c6(),["DeliveryPricingRate"]:c7(),["DeliveryRadiusCondition"]:c8(),["DeliveryRadiusOrigin"]:c9(),["DeliveryRateTablePricingStrategy"]:c10(),["DeliveryStateCondition"]:c11(),["DeliveryWindowTimeCondition"]:c12(),["DeliveryZoneCondition"]:c13(),["MoneyValue"]:c14(),["SharedCodec178"]:c15(),["SharedCodec179"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateTablePricingStrategy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

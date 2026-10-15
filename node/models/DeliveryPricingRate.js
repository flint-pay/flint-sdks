import { d575 as c0, d576 as c1, d577 as c2, d578 as c3, d583 as c4, d634 as c5, d635 as c6, d643 as c7, d672 as c8, d673 as c9, d715 as c10, d725 as c11, d727 as c12, d323 as c13, d582 as c14, d581 as c15 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d643 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d643;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerGroupCondition"]:c2(),["DeliveryDistance"]:c3(),["DeliveryEligibilityExpression"]:c4(),["DeliveryPostalCodeCondition"]:c5(),["DeliveryPostalCodeValue"]:c6(),["DeliveryPricingRate"]:c7(),["DeliveryRadiusCondition"]:c8(),["DeliveryRadiusOrigin"]:c9(),["DeliveryStateCondition"]:c10(),["DeliveryWindowTimeCondition"]:c11(),["DeliveryZoneCondition"]:c12(),["MoneyValue"]:c13(),["SharedCodec184"]:c14(),["SharedCodec185"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingRate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

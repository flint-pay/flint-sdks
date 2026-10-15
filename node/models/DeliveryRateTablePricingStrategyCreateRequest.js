import { d575 as c0, d576 as c1, d577 as c2, d578 as c3, d583 as c4, d634 as c5, d635 as c6, d644 as c7, d672 as c8, d673 as c9, d686 as c10, d715 as c11, d725 as c12, d727 as c13, d323 as c14, d582 as c15, d581 as c16 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d686 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d686;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerGroupCondition"]:c2(),["DeliveryDistance"]:c3(),["DeliveryEligibilityExpression"]:c4(),["DeliveryPostalCodeCondition"]:c5(),["DeliveryPostalCodeValue"]:c6(),["DeliveryPricingRateCreateRequest"]:c7(),["DeliveryRadiusCondition"]:c8(),["DeliveryRadiusOrigin"]:c9(),["DeliveryRateTablePricingStrategyCreateRequest"]:c10(),["DeliveryStateCondition"]:c11(),["DeliveryWindowTimeCondition"]:c12(),["DeliveryZoneCondition"]:c13(),["MoneyValue"]:c14(),["SharedCodec184"]:c15(),["SharedCodec185"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateTablePricingStrategyCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

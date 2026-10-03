import { d584 as c0, d585 as c1, d586 as c2, d587 as c3, d591 as c4, d638 as c5, d639 as c6, d644 as c7, d675 as c8, d676 as c9, d716 as c10, d726 as c11, d728 as c12, d74 as c13, d590 as c14, d276 as c15 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d644 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d644;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerGroupCondition"]:c2(),["DeliveryDistance"]:c3(),["DeliveryEligibilityExpression"]:c4(),["DeliveryPostalCodeCondition"]:c5(),["DeliveryPostalCodeValue"]:c6(),["DeliveryPricingRate"]:c7(),["DeliveryRadiusCondition"]:c8(),["DeliveryRadiusOrigin"]:c9(),["DeliveryStateCondition"]:c10(),["DeliveryWindowTimeCondition"]:c11(),["DeliveryZoneCondition"]:c12(),["MoneyValue"]:c13(),["SharedCodec202"]:c14(),["SharedCodec73"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingRate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

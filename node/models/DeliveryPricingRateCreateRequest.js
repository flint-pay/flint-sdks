import { d8537 as c0, d8551 as c1, d8552 as c2, d8538 as c3, d8554 as c4, d8539 as c5, d8540 as c6, d8541 as c8, d8542 as c9, d8543 as c10 } from '../descriptors/data/376.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8465 as c7 } from '../descriptors/data/372.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8572 as c11, d8573 as c12 } from '../descriptors/data/377.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c13 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8592 as c14, d8593 as c15 } from '../descriptors/data/378.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8465 as d8465 } from '../descriptors/data/372.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8465;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryConditionRequest"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerSegmentCondition"]:c2(),["DeliveryDistanceRequest"]:c3(),["DeliveryEligibilityExpressionRequest"]:c4(),["DeliveryPostalCodeConditionRequest"]:c5(),["DeliveryPostalCodeValueRequest"]:c6(),["DeliveryPricingRateCreateRequest"]:c7(),["DeliveryRadiusConditionRequest"]:c8(),["DeliveryRadiusOrigin"]:c9(),["DeliveryStateConditionRequest"]:c10(),["DeliveryWindowTimeCondition"]:c11(),["DeliveryZoneConditionRequest"]:c12(),["MoneyValue"]:c13(),["SharedCodec801"]:c14(),["SharedCodec802"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingRateCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

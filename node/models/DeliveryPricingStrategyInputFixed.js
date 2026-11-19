import { d8548 as c0, d8549 as c1, d8550 as c2, d8537 as c3, d8551 as c4, d8552 as c5, d8538 as c6, d8553 as c7, d8554 as c8, d8539 as c10, d8540 as c11, d8541 as c15, d8542 as c16, d8543 as c18 } from '../descriptors/data/376.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8555 as c9, d8562 as c12, d8564 as c14, d8565 as c17, d8568 as c19, d8571 as c20, d8572 as c21, d8573 as c22 } from '../descriptors/data/377.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d626 as c13 } from '../descriptors/data/36.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c23 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8574 as c24, d8575 as c25, d8576 as c26, d8592 as c27, d8593 as c28 } from '../descriptors/data/378.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8604 as c29, d8605 as c30 } from '../descriptors/data/379.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d626 as d626 } from '../descriptors/data/36.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d626;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategyRequest"]:c0(),["DeliveryCallbackPricingStrategyRequest"]:c1(),["DeliveryCallerSuppliedPricingStrategyRequest"]:c2(),["DeliveryCountryConditionRequest"]:c3(),["DeliveryCustomerBooleanCondition"]:c4(),["DeliveryCustomerSegmentCondition"]:c5(),["DeliveryDistanceRequest"]:c6(),["DeliveryDistanceUnitPriceRequest"]:c7(),["DeliveryEligibilityExpressionRequest"]:c8(),["DeliveryFixedPricingStrategyRequest"]:c9(),["DeliveryPostalCodeConditionRequest"]:c10(),["DeliveryPostalCodeValueRequest"]:c11(),["DeliveryPricingRateRequest"]:c12(),["DeliveryPricingStrategyInputFixed"]:c13(),["DeliveryPricingTierBandRequest"]:c14(),["DeliveryRadiusConditionRequest"]:c15(),["DeliveryRadiusOrigin"]:c16(),["DeliveryRateTablePricingStrategyRequest"]:c17(),["DeliveryStateConditionRequest"]:c18(),["DeliveryTieredPricingStrategyRequest"]:c19(),["DeliveryWeightUnitPriceRequest"]:c20(),["DeliveryWindowTimeCondition"]:c21(),["DeliveryZoneConditionRequest"]:c22(),["MoneyValue"]:c23(),["SharedCodec1070"]:c24(),["SharedCodec1077"]:c25(),["SharedCodec1078"]:c26(),["SharedCodec801"]:c27(),["SharedCodec802"]:c28(),["SharedCodec915"]:c29(),["SharedCodec916"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingStrategyInputFixed(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

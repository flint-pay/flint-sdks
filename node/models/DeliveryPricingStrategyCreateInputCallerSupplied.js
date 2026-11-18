import { d8547 as c0, d8548 as c1, d8549 as c2, d8536 as c3, d8550 as c4, d8551 as c5, d8537 as c6, d8552 as c7, d8553 as c8, d8538 as c10, d8539 as c11, d8540 as c15, d8541 as c16, d8542 as c18 } from '../descriptors/data/376.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8554 as c9, d8563 as c14, d8567 as c19, d8570 as c20, d8571 as c21, d8572 as c22 } from '../descriptors/data/377.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8464 as c12, d8469 as c17 } from '../descriptors/data/372.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d617 as c13 } from '../descriptors/data/35.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c23 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8573 as c24, d8574 as c25, d8575 as c26, d8591 as c27, d8592 as c28 } from '../descriptors/data/378.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8601 as c29, d8602 as c30 } from '../descriptors/data/379.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d617 as d617 } from '../descriptors/data/35.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d617;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategyRequest"]:c0(),["DeliveryCallbackPricingStrategyRequest"]:c1(),["DeliveryCallerSuppliedPricingStrategyRequest"]:c2(),["DeliveryCountryConditionRequest"]:c3(),["DeliveryCustomerBooleanCondition"]:c4(),["DeliveryCustomerSegmentCondition"]:c5(),["DeliveryDistanceRequest"]:c6(),["DeliveryDistanceUnitPriceRequest"]:c7(),["DeliveryEligibilityExpressionRequest"]:c8(),["DeliveryFixedPricingStrategyRequest"]:c9(),["DeliveryPostalCodeConditionRequest"]:c10(),["DeliveryPostalCodeValueRequest"]:c11(),["DeliveryPricingRateCreateRequest"]:c12(),["DeliveryPricingStrategyCreateInputCallerSupplied"]:c13(),["DeliveryPricingTierBandRequest"]:c14(),["DeliveryRadiusConditionRequest"]:c15(),["DeliveryRadiusOrigin"]:c16(),["DeliveryRateTablePricingStrategyCreateRequest"]:c17(),["DeliveryStateConditionRequest"]:c18(),["DeliveryTieredPricingStrategyRequest"]:c19(),["DeliveryWeightUnitPriceRequest"]:c20(),["DeliveryWindowTimeCondition"]:c21(),["DeliveryZoneConditionRequest"]:c22(),["MoneyValue"]:c23(),["SharedCodec1068"]:c24(),["SharedCodec1075"]:c25(),["SharedCodec1076"]:c26(),["SharedCodec799"]:c27(),["SharedCodec800"]:c28(),["SharedCodec910"]:c29(),["SharedCodec911"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingStrategyCreateInputCallerSupplied(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

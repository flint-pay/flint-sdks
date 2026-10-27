import { d3533 as c0, d3534 as c1, d3535 as c2, d3522 as c3, d3536 as c4, d3537 as c5, d3523 as c6, d3538 as c7, d3539 as c8, d3540 as c9, d3524 as c10, d3525 as c11, d3526 as c15, d3527 as c16, d3528 as c18 } from '../descriptors/data/144.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3543 as c12, d3545 as c14, d3546 as c17, d3548 as c19, d3551 as c20, d3552 as c21, d3553 as c22, d3560 as c24, d3561 as c25 } from '../descriptors/data/145.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d306 as c13 } from '../descriptors/data/17.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c23 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3568 as c26, d3569 as c27 } from '../descriptors/data/146.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3584 as c28, d3585 as c29, d3586 as c30 } from '../descriptors/data/147.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d306 as d306 } from '../descriptors/data/17.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d306;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategyRequest"]:c0(),["DeliveryCallbackPricingStrategyRequest"]:c1(),["DeliveryCallerSuppliedPricingStrategyRequest"]:c2(),["DeliveryCountryCondition"]:c3(),["DeliveryCustomerBooleanCondition"]:c4(),["DeliveryCustomerSegmentCondition"]:c5(),["DeliveryDistance"]:c6(),["DeliveryDistanceUnitPriceRequest"]:c7(),["DeliveryEligibilityExpression"]:c8(),["DeliveryFixedPricingStrategyRequest"]:c9(),["DeliveryPostalCodeCondition"]:c10(),["DeliveryPostalCodeValue"]:c11(),["DeliveryPricingRateRequest"]:c12(),["DeliveryPricingStrategyInputCallback"]:c13(),["DeliveryPricingTierBandRequest"]:c14(),["DeliveryRadiusCondition"]:c15(),["DeliveryRadiusOrigin"]:c16(),["DeliveryRateTablePricingStrategyRequest"]:c17(),["DeliveryStateCondition"]:c18(),["DeliveryTieredPricingStrategyRequest"]:c19(),["DeliveryWeightUnitPriceRequest"]:c20(),["DeliveryWindowTimeCondition"]:c21(),["DeliveryZoneCondition"]:c22(),["MoneyValue"]:c23(),["SharedCodec252"]:c24(),["SharedCodec253"]:c25(),["SharedCodec273"]:c26(),["SharedCodec274"]:c27(),["SharedCodec329"]:c28(),["SharedCodec330"]:c29(),["SharedCodec331"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingStrategyInputCallback(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

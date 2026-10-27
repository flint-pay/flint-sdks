import { d3548 as c0, d3549 as c1, d3550 as c2, d3537 as c3, d3551 as c4, d3552 as c5, d3538 as c6, d3553 as c7, d3554 as c8, d3539 as c10, d3540 as c11, d3541 as c15, d3542 as c16, d3543 as c18 } from '../descriptors/data/145.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3555 as c9, d3560 as c14, d3563 as c19, d3566 as c20, d3567 as c21, d3568 as c22 } from '../descriptors/data/146.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3480 as c12, d3485 as c17 } from '../descriptors/data/142.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d303 as c13 } from '../descriptors/data/17.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3013 as c23 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3580 as c24, d3581 as c25, d3590 as c26, d3591 as c27 } from '../descriptors/data/147.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3604 as c28, d3605 as c29, d3606 as c30 } from '../descriptors/data/148.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d303 as d303 } from '../descriptors/data/17.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d303;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategyRequest"]:c0(),["DeliveryCallbackPricingStrategyRequest"]:c1(),["DeliveryCallerSuppliedPricingStrategyRequest"]:c2(),["DeliveryCountryCondition"]:c3(),["DeliveryCustomerBooleanCondition"]:c4(),["DeliveryCustomerSegmentCondition"]:c5(),["DeliveryDistance"]:c6(),["DeliveryDistanceUnitPriceRequest"]:c7(),["DeliveryEligibilityExpression"]:c8(),["DeliveryFixedPricingStrategyRequest"]:c9(),["DeliveryPostalCodeCondition"]:c10(),["DeliveryPostalCodeValue"]:c11(),["DeliveryPricingRateCreateRequest"]:c12(),["DeliveryPricingStrategyCreateInputCallerSupplied"]:c13(),["DeliveryPricingTierBandRequest"]:c14(),["DeliveryRadiusCondition"]:c15(),["DeliveryRadiusOrigin"]:c16(),["DeliveryRateTablePricingStrategyCreateRequest"]:c17(),["DeliveryStateCondition"]:c18(),["DeliveryTieredPricingStrategyRequest"]:c19(),["DeliveryWeightUnitPriceRequest"]:c20(),["DeliveryWindowTimeCondition"]:c21(),["DeliveryZoneCondition"]:c22(),["MoneyValue"]:c23(),["SharedCodec257"]:c24(),["SharedCodec258"]:c25(),["SharedCodec281"]:c26(),["SharedCodec282"]:c27(),["SharedCodec334"]:c28(),["SharedCodec335"]:c29(),["SharedCodec336"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingStrategyCreateInputCallerSupplied(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

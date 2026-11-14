import { d6438 as c0, d6439 as c1, d6440 as c2, d6441 as c4, d6442 as c5, d6443 as c7, d6444 as c8, d6445 as c9 } from '../descriptors/data/297.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6427 as c3, d6428 as c6, d6429 as c10, d6430 as c11, d6431 as c15, d6432 as c16, d6433 as c18 } from '../descriptors/data/296.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6355 as c12 } from '../descriptors/data/292.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d510 as c13 } from '../descriptors/data/30.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6454 as c14, d6458 as c19, d6461 as c20, d6462 as c21, d6463 as c22 } from '../descriptors/data/298.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6360 as c17 } from '../descriptors/data/293.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c23 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6479 as c24, d6480 as c25, d6485 as c26, d6486 as c27 } from '../descriptors/data/299.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6503 as c28, d6504 as c29, d6505 as c30 } from '../descriptors/data/300.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d510 as d510 } from '../descriptors/data/30.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d510;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategyRequest"]:c0(),["DeliveryCallbackPricingStrategyRequest"]:c1(),["DeliveryCallerSuppliedPricingStrategyRequest"]:c2(),["DeliveryCountryConditionRequest"]:c3(),["DeliveryCustomerBooleanCondition"]:c4(),["DeliveryCustomerSegmentCondition"]:c5(),["DeliveryDistanceRequest"]:c6(),["DeliveryDistanceUnitPriceRequest"]:c7(),["DeliveryEligibilityExpressionRequest"]:c8(),["DeliveryFixedPricingStrategyRequest"]:c9(),["DeliveryPostalCodeConditionRequest"]:c10(),["DeliveryPostalCodeValueRequest"]:c11(),["DeliveryPricingRateCreateRequest"]:c12(),["DeliveryPricingStrategyCreateInputCalculated"]:c13(),["DeliveryPricingTierBandRequest"]:c14(),["DeliveryRadiusConditionRequest"]:c15(),["DeliveryRadiusOrigin"]:c16(),["DeliveryRateTablePricingStrategyCreateRequest"]:c17(),["DeliveryStateConditionRequest"]:c18(),["DeliveryTieredPricingStrategyRequest"]:c19(),["DeliveryWeightUnitPriceRequest"]:c20(),["DeliveryWindowTimeCondition"]:c21(),["DeliveryZoneConditionRequest"]:c22(),["MoneyValue"]:c23(),["SharedCodec528"]:c24(),["SharedCodec529"]:c25(),["SharedCodec566"]:c26(),["SharedCodec567"]:c27(),["SharedCodec659"]:c28(),["SharedCodec660"]:c29(),["SharedCodec661"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingStrategyCreateInputCalculated(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

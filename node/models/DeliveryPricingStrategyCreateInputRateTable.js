import { d6440 as c0, d6441 as c1, d6442 as c2, d6429 as c3, d6443 as c4, d6444 as c5, d6430 as c6, d6445 as c7, d6446 as c8, d6447 as c9, d6431 as c10, d6432 as c11, d6433 as c15, d6434 as c16, d6435 as c18 } from '../descriptors/data/296.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6357 as c12, d6362 as c17 } from '../descriptors/data/292.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d513 as c13 } from '../descriptors/data/30.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6456 as c14, d6460 as c19, d6463 as c20, d6464 as c21, d6465 as c22 } from '../descriptors/data/297.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c23 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6481 as c24, d6482 as c25 } from '../descriptors/data/298.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6495 as c26, d6496 as c27, d6505 as c28, d6506 as c29, d6507 as c30 } from '../descriptors/data/299.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d513 as d513 } from '../descriptors/data/30.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d513;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategyRequest"]:c0(),["DeliveryCallbackPricingStrategyRequest"]:c1(),["DeliveryCallerSuppliedPricingStrategyRequest"]:c2(),["DeliveryCountryConditionRequest"]:c3(),["DeliveryCustomerBooleanCondition"]:c4(),["DeliveryCustomerSegmentCondition"]:c5(),["DeliveryDistanceRequest"]:c6(),["DeliveryDistanceUnitPriceRequest"]:c7(),["DeliveryEligibilityExpressionRequest"]:c8(),["DeliveryFixedPricingStrategyRequest"]:c9(),["DeliveryPostalCodeConditionRequest"]:c10(),["DeliveryPostalCodeValueRequest"]:c11(),["DeliveryPricingRateCreateRequest"]:c12(),["DeliveryPricingStrategyCreateInputRateTable"]:c13(),["DeliveryPricingTierBandRequest"]:c14(),["DeliveryRadiusConditionRequest"]:c15(),["DeliveryRadiusOrigin"]:c16(),["DeliveryRateTablePricingStrategyCreateRequest"]:c17(),["DeliveryStateConditionRequest"]:c18(),["DeliveryTieredPricingStrategyRequest"]:c19(),["DeliveryWeightUnitPriceRequest"]:c20(),["DeliveryWindowTimeCondition"]:c21(),["DeliveryZoneConditionRequest"]:c22(),["MoneyValue"]:c23(),["SharedCodec526"]:c24(),["SharedCodec527"]:c25(),["SharedCodec576"]:c26(),["SharedCodec577"]:c27(),["SharedCodec657"]:c28(),["SharedCodec658"]:c29(),["SharedCodec659"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingStrategyCreateInputRateTable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

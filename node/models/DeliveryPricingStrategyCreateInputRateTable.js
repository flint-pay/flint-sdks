import { d6470 as c0, d6471 as c1, d6472 as c2, d6459 as c3, d6473 as c4, d6474 as c5, d6460 as c6, d6475 as c7, d6476 as c8, d6477 as c9, d6461 as c10, d6462 as c11, d6463 as c15, d6464 as c16, d6465 as c18 } from '../descriptors/data/297.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6387 as c12, d6392 as c17 } from '../descriptors/data/293.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d516 as c13 } from '../descriptors/data/30.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6486 as c14, d6490 as c19, d6493 as c20, d6494 as c21, d6495 as c22 } from '../descriptors/data/298.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c23 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6511 as c24, d6512 as c25 } from '../descriptors/data/299.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6525 as c26, d6526 as c27, d6535 as c28, d6536 as c29, d6537 as c30 } from '../descriptors/data/300.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d516 as d516 } from '../descriptors/data/30.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d516;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategyRequest"]:c0(),["DeliveryCallbackPricingStrategyRequest"]:c1(),["DeliveryCallerSuppliedPricingStrategyRequest"]:c2(),["DeliveryCountryConditionRequest"]:c3(),["DeliveryCustomerBooleanCondition"]:c4(),["DeliveryCustomerSegmentCondition"]:c5(),["DeliveryDistanceRequest"]:c6(),["DeliveryDistanceUnitPriceRequest"]:c7(),["DeliveryEligibilityExpressionRequest"]:c8(),["DeliveryFixedPricingStrategyRequest"]:c9(),["DeliveryPostalCodeConditionRequest"]:c10(),["DeliveryPostalCodeValueRequest"]:c11(),["DeliveryPricingRateCreateRequest"]:c12(),["DeliveryPricingStrategyCreateInputRateTable"]:c13(),["DeliveryPricingTierBandRequest"]:c14(),["DeliveryRadiusConditionRequest"]:c15(),["DeliveryRadiusOrigin"]:c16(),["DeliveryRateTablePricingStrategyCreateRequest"]:c17(),["DeliveryStateConditionRequest"]:c18(),["DeliveryTieredPricingStrategyRequest"]:c19(),["DeliveryWeightUnitPriceRequest"]:c20(),["DeliveryWindowTimeCondition"]:c21(),["DeliveryZoneConditionRequest"]:c22(),["MoneyValue"]:c23(),["SharedCodec526"]:c24(),["SharedCodec527"]:c25(),["SharedCodec576"]:c26(),["SharedCodec577"]:c27(),["SharedCodec657"]:c28(),["SharedCodec658"]:c29(),["SharedCodec659"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingStrategyCreateInputRateTable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

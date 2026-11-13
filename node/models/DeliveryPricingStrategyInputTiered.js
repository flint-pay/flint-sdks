import { d6400 as c0, d6401 as c1, d6402 as c2, d6389 as c3, d6403 as c4, d6404 as c5, d6390 as c6, d6405 as c7, d6406 as c8, d6407 as c9, d6391 as c10, d6392 as c11, d6393 as c15, d6394 as c16, d6395 as c18 } from '../descriptors/data/291.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6414 as c12, d6416 as c14, d6417 as c17, d6420 as c19, d6423 as c20, d6424 as c21, d6425 as c22 } from '../descriptors/data/292.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d519 as c13 } from '../descriptors/data/30.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c23 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6441 as c24, d6442 as c25 } from '../descriptors/data/293.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6457 as c26, d6458 as c27, d6465 as c28, d6466 as c29, d6467 as c30 } from '../descriptors/data/294.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d519 as d519 } from '../descriptors/data/30.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d519;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategyRequest"]:c0(),["DeliveryCallbackPricingStrategyRequest"]:c1(),["DeliveryCallerSuppliedPricingStrategyRequest"]:c2(),["DeliveryCountryConditionRequest"]:c3(),["DeliveryCustomerBooleanCondition"]:c4(),["DeliveryCustomerSegmentCondition"]:c5(),["DeliveryDistanceRequest"]:c6(),["DeliveryDistanceUnitPriceRequest"]:c7(),["DeliveryEligibilityExpressionRequest"]:c8(),["DeliveryFixedPricingStrategyRequest"]:c9(),["DeliveryPostalCodeConditionRequest"]:c10(),["DeliveryPostalCodeValueRequest"]:c11(),["DeliveryPricingRateRequest"]:c12(),["DeliveryPricingStrategyInputTiered"]:c13(),["DeliveryPricingTierBandRequest"]:c14(),["DeliveryRadiusConditionRequest"]:c15(),["DeliveryRadiusOrigin"]:c16(),["DeliveryRateTablePricingStrategyRequest"]:c17(),["DeliveryStateConditionRequest"]:c18(),["DeliveryTieredPricingStrategyRequest"]:c19(),["DeliveryWeightUnitPriceRequest"]:c20(),["DeliveryWindowTimeCondition"]:c21(),["DeliveryZoneConditionRequest"]:c22(),["MoneyValue"]:c23(),["SharedCodec522"]:c24(),["SharedCodec523"]:c25(),["SharedCodec575"]:c26(),["SharedCodec576"]:c27(),["SharedCodec654"]:c28(),["SharedCodec655"]:c29(),["SharedCodec656"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingStrategyInputTiered(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

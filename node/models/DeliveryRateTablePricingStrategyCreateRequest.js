import { d6426 as c0, d6427 as c3, d6428 as c5, d6429 as c6, d6430 as c8, d6431 as c9, d6432 as c11 } from '../descriptors/data/293.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6440 as c1, d6441 as c2, d6443 as c4 } from '../descriptors/data/294.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6354 as c7 } from '../descriptors/data/289.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6359 as c10 } from '../descriptors/data/290.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6461 as c12, d6462 as c13 } from '../descriptors/data/295.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c14 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6478 as c15, d6479 as c16 } from '../descriptors/data/296.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6359 as d6359 } from '../descriptors/data/290.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6359;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryConditionRequest"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerSegmentCondition"]:c2(),["DeliveryDistanceRequest"]:c3(),["DeliveryEligibilityExpressionRequest"]:c4(),["DeliveryPostalCodeConditionRequest"]:c5(),["DeliveryPostalCodeValueRequest"]:c6(),["DeliveryPricingRateCreateRequest"]:c7(),["DeliveryRadiusConditionRequest"]:c8(),["DeliveryRadiusOrigin"]:c9(),["DeliveryRateTablePricingStrategyCreateRequest"]:c10(),["DeliveryStateConditionRequest"]:c11(),["DeliveryWindowTimeCondition"]:c12(),["DeliveryZoneConditionRequest"]:c13(),["MoneyValue"]:c14(),["SharedCodec524"]:c15(),["SharedCodec525"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateTablePricingStrategyCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

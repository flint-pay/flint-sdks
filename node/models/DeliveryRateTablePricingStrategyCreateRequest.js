import { d6241 as c0, d6242 as c3, d6243 as c5, d6244 as c6, d6245 as c8, d6246 as c9, d6247 as c11 } from '../descriptors/data/279.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6255 as c1, d6256 as c2, d6258 as c4 } from '../descriptors/data/280.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6169 as c7, d6174 as c10 } from '../descriptors/data/276.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6276 as c12, d6277 as c13 } from '../descriptors/data/281.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c14 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6293 as c15, d6294 as c16 } from '../descriptors/data/282.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6174 as d6174 } from '../descriptors/data/276.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6174;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryConditionRequest"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerSegmentCondition"]:c2(),["DeliveryDistanceRequest"]:c3(),["DeliveryEligibilityExpressionRequest"]:c4(),["DeliveryPostalCodeConditionRequest"]:c5(),["DeliveryPostalCodeValueRequest"]:c6(),["DeliveryPricingRateCreateRequest"]:c7(),["DeliveryRadiusConditionRequest"]:c8(),["DeliveryRadiusOrigin"]:c9(),["DeliveryRateTablePricingStrategyCreateRequest"]:c10(),["DeliveryStateConditionRequest"]:c11(),["DeliveryWindowTimeCondition"]:c12(),["DeliveryZoneConditionRequest"]:c13(),["MoneyValue"]:c14(),["SharedCodec470"]:c15(),["SharedCodec471"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateTablePricingStrategyCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d6241 as c0, d6242 as c3, d6243 as c5, d6244 as c6, d6245 as c7, d6246 as c8, d6247 as c9 } from '../descriptors/data/279.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6255 as c1, d6256 as c2, d6258 as c4 } from '../descriptors/data/280.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6276 as c10, d6277 as c11 } from '../descriptors/data/281.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6293 as c12, d6294 as c13 } from '../descriptors/data/282.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6258 as d6258 } from '../descriptors/data/280.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6258;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryConditionRequest"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerSegmentCondition"]:c2(),["DeliveryDistanceRequest"]:c3(),["DeliveryEligibilityExpressionRequest"]:c4(),["DeliveryPostalCodeConditionRequest"]:c5(),["DeliveryPostalCodeValueRequest"]:c6(),["DeliveryRadiusConditionRequest"]:c7(),["DeliveryRadiusOrigin"]:c8(),["DeliveryStateConditionRequest"]:c9(),["DeliveryWindowTimeCondition"]:c10(),["DeliveryZoneConditionRequest"]:c11(),["SharedCodec470"]:c12(),["SharedCodec471"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEligibilityExpressionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

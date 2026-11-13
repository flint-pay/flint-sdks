import { d6389 as c0, d6403 as c1, d6404 as c2, d6390 as c3, d6406 as c4, d6391 as c5, d6392 as c6, d6393 as c8, d6394 as c9, d6395 as c10 } from '../descriptors/data/291.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6317 as c7 } from '../descriptors/data/287.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6424 as c11, d6425 as c12 } from '../descriptors/data/292.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c13 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6441 as c14, d6442 as c15 } from '../descriptors/data/293.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6317 as d6317 } from '../descriptors/data/287.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6317;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryConditionRequest"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerSegmentCondition"]:c2(),["DeliveryDistanceRequest"]:c3(),["DeliveryEligibilityExpressionRequest"]:c4(),["DeliveryPostalCodeConditionRequest"]:c5(),["DeliveryPostalCodeValueRequest"]:c6(),["DeliveryPricingRateCreateRequest"]:c7(),["DeliveryRadiusConditionRequest"]:c8(),["DeliveryRadiusOrigin"]:c9(),["DeliveryStateConditionRequest"]:c10(),["DeliveryWindowTimeCondition"]:c11(),["DeliveryZoneConditionRequest"]:c12(),["MoneyValue"]:c13(),["SharedCodec522"]:c14(),["SharedCodec523"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingRateCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

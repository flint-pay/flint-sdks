import { d6427 as c0, d6428 as c3, d6429 as c5, d6430 as c6, d6431 as c7, d6432 as c8, d6433 as c9 } from '../descriptors/data/296.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6441 as c1, d6442 as c2, d6444 as c4 } from '../descriptors/data/297.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6462 as c10, d6463 as c11 } from '../descriptors/data/298.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6479 as c12, d6480 as c13 } from '../descriptors/data/299.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6444 as d6444 } from '../descriptors/data/297.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6444;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryConditionRequest"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerSegmentCondition"]:c2(),["DeliveryDistanceRequest"]:c3(),["DeliveryEligibilityExpressionRequest"]:c4(),["DeliveryPostalCodeConditionRequest"]:c5(),["DeliveryPostalCodeValueRequest"]:c6(),["DeliveryRadiusConditionRequest"]:c7(),["DeliveryRadiusOrigin"]:c8(),["DeliveryStateConditionRequest"]:c9(),["DeliveryWindowTimeCondition"]:c10(),["DeliveryZoneConditionRequest"]:c11(),["SharedCodec528"]:c12(),["SharedCodec529"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEligibilityExpressionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

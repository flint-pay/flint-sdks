import { d6427 as c0, d6428 as c3, d6429 as c5, d6430 as c6, d6431 as c8, d6432 as c9, d6433 as c10 } from '../descriptors/data/296.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6441 as c1, d6442 as c2, d6444 as c4 } from '../descriptors/data/297.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6452 as c7, d6462 as c11, d6463 as c12 } from '../descriptors/data/298.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c13 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6479 as c14, d6480 as c15 } from '../descriptors/data/299.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6452 as d6452 } from '../descriptors/data/298.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6452;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryConditionRequest"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerSegmentCondition"]:c2(),["DeliveryDistanceRequest"]:c3(),["DeliveryEligibilityExpressionRequest"]:c4(),["DeliveryPostalCodeConditionRequest"]:c5(),["DeliveryPostalCodeValueRequest"]:c6(),["DeliveryPricingRateRequest"]:c7(),["DeliveryRadiusConditionRequest"]:c8(),["DeliveryRadiusOrigin"]:c9(),["DeliveryStateConditionRequest"]:c10(),["DeliveryWindowTimeCondition"]:c11(),["DeliveryZoneConditionRequest"]:c12(),["MoneyValue"]:c13(),["SharedCodec528"]:c14(),["SharedCodec529"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingRateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

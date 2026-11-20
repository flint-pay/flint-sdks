import { d8571 as c0, d8585 as c1, d8586 as c2, d8572 as c3, d8588 as c4, d8573 as c5, d8574 as c6, d8575 as c7, d8576 as c8, d8577 as c9 } from '../descriptors/data/382.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8606 as c10, d8607 as c11 } from '../descriptors/data/383.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8626 as c12, d8627 as c13 } from '../descriptors/data/384.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8588 as d8588 } from '../descriptors/data/382.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8588;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryConditionRequest"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerSegmentCondition"]:c2(),["DeliveryDistanceRequest"]:c3(),["DeliveryEligibilityExpressionRequest"]:c4(),["DeliveryPostalCodeConditionRequest"]:c5(),["DeliveryPostalCodeValueRequest"]:c6(),["DeliveryRadiusConditionRequest"]:c7(),["DeliveryRadiusOrigin"]:c8(),["DeliveryStateConditionRequest"]:c9(),["DeliveryWindowTimeCondition"]:c10(),["DeliveryZoneConditionRequest"]:c11(),["SharedCodec802"]:c12(),["SharedCodec803"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEligibilityExpressionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

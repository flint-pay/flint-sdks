import { d8536 as c0, d8550 as c1, d8551 as c2, d8537 as c3, d8553 as c4, d8538 as c5, d8539 as c6, d8540 as c7, d8541 as c8, d8542 as c9 } from '../descriptors/data/376.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8571 as c10, d8572 as c11 } from '../descriptors/data/377.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8591 as c12, d8592 as c13 } from '../descriptors/data/378.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8553 as d8553 } from '../descriptors/data/376.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8553;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryConditionRequest"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerSegmentCondition"]:c2(),["DeliveryDistanceRequest"]:c3(),["DeliveryEligibilityExpressionRequest"]:c4(),["DeliveryPostalCodeConditionRequest"]:c5(),["DeliveryPostalCodeValueRequest"]:c6(),["DeliveryRadiusConditionRequest"]:c7(),["DeliveryRadiusOrigin"]:c8(),["DeliveryStateConditionRequest"]:c9(),["DeliveryWindowTimeCondition"]:c10(),["DeliveryZoneConditionRequest"]:c11(),["SharedCodec799"]:c12(),["SharedCodec800"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEligibilityExpressionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

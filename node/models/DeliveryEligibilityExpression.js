import { d3537 as c0, d3551 as c1, d3552 as c2, d3538 as c3, d3554 as c4, d3539 as c5, d3540 as c6, d3541 as c7, d3542 as c8, d3543 as c9 } from '../descriptors/data/145.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3567 as c10, d3568 as c11 } from '../descriptors/data/146.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3580 as c12, d3581 as c13 } from '../descriptors/data/147.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3554 as d3554 } from '../descriptors/data/145.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3554;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerSegmentCondition"]:c2(),["DeliveryDistance"]:c3(),["DeliveryEligibilityExpression"]:c4(),["DeliveryPostalCodeCondition"]:c5(),["DeliveryPostalCodeValue"]:c6(),["DeliveryRadiusCondition"]:c7(),["DeliveryRadiusOrigin"]:c8(),["DeliveryStateCondition"]:c9(),["DeliveryWindowTimeCondition"]:c10(),["DeliveryZoneCondition"]:c11(),["SharedCodec257"]:c12(),["SharedCodec258"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEligibilityExpression(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d598 as c0, d599 as c1, d600 as c2, d601 as c3, d605 as c4, d656 as c5, d657 as c6, d696 as c7, d697 as c8, d738 as c9, d748 as c10, d750 as c11, d604 as c12, d284 as c13 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d605 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d605;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerGroupCondition"]:c2(),["DeliveryDistance"]:c3(),["DeliveryEligibilityExpression"]:c4(),["DeliveryPostalCodeCondition"]:c5(),["DeliveryPostalCodeValue"]:c6(),["DeliveryRadiusCondition"]:c7(),["DeliveryRadiusOrigin"]:c8(),["DeliveryStateCondition"]:c9(),["DeliveryWindowTimeCondition"]:c10(),["DeliveryZoneCondition"]:c11(),["SharedCodec206"]:c12(),["SharedCodec74"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEligibilityExpression(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

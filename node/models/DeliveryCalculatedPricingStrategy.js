import { d583 as c0, d593 as c1, d729 as c2, d77 as c3 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d583 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d583;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategy"]:c0(),["DeliveryDistanceUnitPrice"]:c1(),["DeliveryWeightUnitPrice"]:c2(),["MoneyValue"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCalculatedPricingStrategy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

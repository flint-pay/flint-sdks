import { d144 as c0, d146 as c1, d731 as c2, d77 as c3, d145 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d144 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d144;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["DeliveryWindowRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec45"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d731 as c0, d732 as c1, d77 as c2 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d731 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d731;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryWindowRequest"]:c0(),["DeliveryWindowResource"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryWindowRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

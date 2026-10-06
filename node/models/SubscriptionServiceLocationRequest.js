import { d73 as c0, d2335 as c1, d2336 as c2, d2337 as c3 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2337 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2337;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PostalAddress"]:c0(),["SharedCodec613"]:c1(),["SharedCodec614"]:c2(),["SubscriptionServiceLocationRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionServiceLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

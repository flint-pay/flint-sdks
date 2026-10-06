import { d142 as c0, d2318 as c1 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d142 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d142;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerSubscriptionPaymentRetry"]:c0(),["SubscriptionPaymentRetryFailure"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerSubscriptionPaymentRetry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

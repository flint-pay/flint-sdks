import { d2002 as c0, d847 as c1, d2304 as c2, d2303 as c3 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2002 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2002;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PendingPaymentAction"]:c0(),["PendingPaymentActionSubject"]:c1(),["StripePaymentClientAction"]:c2(),["StripeSetupIntentClientAction"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePendingPaymentAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

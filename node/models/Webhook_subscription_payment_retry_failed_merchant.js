import { d893 as c0, d490 as c1, d892 as c2, d2372 as c3, d2373 as c4, d1168 as c5 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1168 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SubscriptionPaymentRetry"]:c3(),["SubscriptionPaymentRetryFailure"]:c4(),["Webhook_subscription_payment_retry_failed_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_payment_retry_failed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

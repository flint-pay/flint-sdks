import { d893 as c0, d490 as c1, d892 as c2, d2372 as c3, d2373 as c4, d1069 as c5 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1069 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1069;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SubscriptionPaymentRetry"]:c3(),["SubscriptionPaymentRetryFailure"]:c4(),["Webhook_subscription_payment_retry_succeeded_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_payment_retry_succeeded_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

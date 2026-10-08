import { d901 as c0, d900 as c1, d1070 as c2, d2372 as c3, d2373 as c4, d1169 as c5 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1169 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1169;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec251"]:c1(),["SharedCodec297"]:c2(),["SubscriptionPaymentRetry"]:c3(),["SubscriptionPaymentRetryFailure"]:c4(),["Webhook_subscription_payment_retry_failed_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_payment_retry_failed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

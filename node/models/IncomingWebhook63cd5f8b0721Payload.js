import { d1193 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1096 as c6, d2344 as c7, d2345 as c8, d1192 as c9, d1191 as c10 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1193 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1193;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook63cd5f8b0721Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec328"]:c6(),["SubscriptionPaymentRetry"]:c7(),["SubscriptionPaymentRetryFailure"]:c8(),["Webhook_subscription_payment_retry_failed_installed_merchants"]:c9(),["Webhook_subscription_payment_retry_failed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook63cd5f8b0721Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

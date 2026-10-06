import { d938 as c0, d937 as c1, d1096 as c2, d2343 as c3, d2344 as c4, d1192 as c5 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1192 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1192;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec287"]:c1(),["SharedCodec328"]:c2(),["SubscriptionPaymentRetry"]:c3(),["SubscriptionPaymentRetryFailure"]:c4(),["Webhook_subscription_payment_retry_failed_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_payment_retry_failed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

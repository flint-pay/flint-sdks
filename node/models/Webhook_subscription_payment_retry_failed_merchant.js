import { d898 as c0, d500 as c1, d897 as c2, d2388 as c3, d2389 as c4, d1170 as c5 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1170 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1170;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec250"]:c2(),["SubscriptionPaymentRetry"]:c3(),["SubscriptionPaymentRetryFailure"]:c4(),["Webhook_subscription_payment_retry_failed_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_payment_retry_failed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1074 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d1072 as c6, d2388 as c7, d2389 as c8, d1073 as c9, d1071 as c10 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1074 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1074;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3a84d3034c0dPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec298"]:c6(),["SubscriptionPaymentRetry"]:c7(),["SubscriptionPaymentRetryFailure"]:c8(),["Webhook_subscription_payment_retry_succeeded_installed_merchants"]:c9(),["Webhook_subscription_payment_retry_succeeded_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3a84d3034c0dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

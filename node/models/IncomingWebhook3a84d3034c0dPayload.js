import { d1104 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d1102 as c6, d2351 as c7, d2352 as c8, d1103 as c9, d1101 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1104 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1104;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3a84d3034c0dPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec332"]:c6(),["SubscriptionPaymentRetry"]:c7(),["SubscriptionPaymentRetryFailure"]:c8(),["Webhook_subscription_payment_retry_succeeded_installed_merchants"]:c9(),["Webhook_subscription_payment_retry_succeeded_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3a84d3034c0dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1314 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d1102 as c6, d2351 as c7, d2352 as c8, d1313 as c9, d1312 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1314 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1314;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook9647232e2632Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec332"]:c6(),["SubscriptionPaymentRetry"]:c7(),["SubscriptionPaymentRetryFailure"]:c8(),["Webhook_subscription_payment_retry_created_installed_merchants"]:c9(),["Webhook_subscription_payment_retry_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9647232e2632Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

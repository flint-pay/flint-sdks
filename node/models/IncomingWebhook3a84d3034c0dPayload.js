import { d1072 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d1070 as c6, d2372 as c7, d2373 as c8, d1071 as c9, d1069 as c10 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1072 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1072;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3a84d3034c0dPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec297"]:c6(),["SubscriptionPaymentRetry"]:c7(),["SubscriptionPaymentRetryFailure"]:c8(),["Webhook_subscription_payment_retry_succeeded_installed_merchants"]:c9(),["Webhook_subscription_payment_retry_succeeded_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3a84d3034c0dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

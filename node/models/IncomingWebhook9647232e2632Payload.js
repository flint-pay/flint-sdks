import { d1295 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d1070 as c6, d2372 as c7, d2373 as c8, d1294 as c9, d1293 as c10 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1295 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1295;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook9647232e2632Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec297"]:c6(),["SubscriptionPaymentRetry"]:c7(),["SubscriptionPaymentRetryFailure"]:c8(),["Webhook_subscription_payment_retry_created_installed_merchants"]:c9(),["Webhook_subscription_payment_retry_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9647232e2632Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

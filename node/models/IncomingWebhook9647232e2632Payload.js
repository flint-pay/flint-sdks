import { d1250 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d1038 as c6, d2296 as c7, d2297 as c8, d1249 as c9, d1248 as c10 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1250 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1250;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook9647232e2632Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec283"]:c6(),["SubscriptionPaymentRetry"]:c7(),["SubscriptionPaymentRetryFailure"]:c8(),["Webhook_subscription_payment_retry_created_installed_merchants"]:c9(),["Webhook_subscription_payment_retry_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9647232e2632Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

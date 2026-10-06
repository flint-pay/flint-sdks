import { d1308 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1096 as c6, d2343 as c7, d2344 as c8, d1307 as c9, d1306 as c10 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1308 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1308;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook9647232e2632Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec328"]:c6(),["SubscriptionPaymentRetry"]:c7(),["SubscriptionPaymentRetryFailure"]:c8(),["Webhook_subscription_payment_retry_created_installed_merchants"]:c9(),["Webhook_subscription_payment_retry_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9647232e2632Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

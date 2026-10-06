import { d977 as c0, d1802 as c1, d1803 as c2, d930 as c3, d77 as c4, d525 as c5, d929 as c6, d2563 as c7 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d977 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d977;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0d9fec82cba8Payload"]:c0(),["MerchantSubscriptionInvoice"]:c1(),["MerchantSubscriptionInvoiceLine"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["SharedCodec199"]:c5(),["SharedCodec282"]:c6(),["Webhook_merchant_subscription_invoice_updated_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0d9fec82cba8Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

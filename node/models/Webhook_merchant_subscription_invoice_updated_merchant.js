import { d1802 as c0, d1803 as c1, d930 as c2, d77 as c3, d525 as c4, d929 as c5, d2563 as c6 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2563 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2563;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantSubscriptionInvoice"]:c0(),["MerchantSubscriptionInvoiceLine"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["SharedCodec199"]:c4(),["SharedCodec282"]:c5(),["Webhook_merchant_subscription_invoice_updated_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_merchant_subscription_invoice_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

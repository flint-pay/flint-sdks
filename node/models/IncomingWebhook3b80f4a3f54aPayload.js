import { d1105 as c0, d1802 as c1, d1803 as c2, d930 as c3, d77 as c4, d525 as c5, d929 as c6, d2562 as c7 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1105 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1105;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3b80f4a3f54aPayload"]:c0(),["MerchantSubscriptionInvoice"]:c1(),["MerchantSubscriptionInvoiceLine"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["SharedCodec199"]:c5(),["SharedCodec282"]:c6(),["Webhook_merchant_subscription_invoice_issued_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3b80f4a3f54aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1776 as c0, d1777 as c1, d916 as c2, d77 as c3, d520 as c4, d915 as c5, d2536 as c6 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2536 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2536;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantSubscriptionInvoice"]:c0(),["MerchantSubscriptionInvoiceLine"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["SharedCodec199"]:c4(),["SharedCodec281"]:c5(),["Webhook_merchant_subscription_invoice_updated_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_merchant_subscription_invoice_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

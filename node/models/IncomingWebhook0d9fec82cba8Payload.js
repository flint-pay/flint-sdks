import { d963 as c0, d1776 as c1, d1777 as c2, d916 as c3, d77 as c4, d520 as c5, d915 as c6, d2536 as c7 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d963 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d963;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0d9fec82cba8Payload"]:c0(),["MerchantSubscriptionInvoice"]:c1(),["MerchantSubscriptionInvoiceLine"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["SharedCodec199"]:c5(),["SharedCodec281"]:c6(),["Webhook_merchant_subscription_invoice_updated_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0d9fec82cba8Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

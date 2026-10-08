import { d1079 as c0, d1800 as c1, d1801 as c2, d893 as c3, d323 as c4, d490 as c5, d892 as c6, d2604 as c7 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1079 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1079;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3b80f4a3f54aPayload"]:c0(),["MerchantSubscriptionInvoice"]:c1(),["MerchantSubscriptionInvoiceLine"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["SharedCodec170"]:c5(),["SharedCodec246"]:c6(),["Webhook_merchant_subscription_invoice_issued_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3b80f4a3f54aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1800 as c0, d1801 as c1, d893 as c2, d323 as c3, d490 as c4, d892 as c5, d2604 as c6 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2604 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2604;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantSubscriptionInvoice"]:c0(),["MerchantSubscriptionInvoiceLine"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["SharedCodec170"]:c4(),["SharedCodec246"]:c5(),["Webhook_merchant_subscription_invoice_issued_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_merchant_subscription_invoice_issued_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

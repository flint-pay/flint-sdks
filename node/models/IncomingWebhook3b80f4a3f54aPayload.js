import { d978 as c0, d1626 as c1, d1627 as c2, d815 as c3, d69 as c4, d468 as c5, d814 as c6, d2348 as c7 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d978 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d978;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3b80f4a3f54aPayload"]:c0(),["MerchantSubscriptionInvoice"]:c1(),["MerchantSubscriptionInvoiceLine"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["SharedCodec176"]:c5(),["SharedCodec244"]:c6(),["Webhook_merchant_subscription_invoice_issued_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3b80f4a3f54aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

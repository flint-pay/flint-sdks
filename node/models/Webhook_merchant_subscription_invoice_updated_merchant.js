import { d1800 as c0, d1801 as c1, d893 as c2, d323 as c3, d490 as c4, d892 as c5, d2605 as c6 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2605 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2605;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantSubscriptionInvoice"]:c0(),["MerchantSubscriptionInvoiceLine"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["SharedCodec170"]:c4(),["SharedCodec246"]:c5(),["Webhook_merchant_subscription_invoice_updated_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_merchant_subscription_invoice_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

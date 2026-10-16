import { d1803 as c0, d1804 as c1, d898 as c2, d323 as c3, d500 as c4, d897 as c5, d2620 as c6 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2620 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2620;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantSubscriptionInvoice"]:c0(),["MerchantSubscriptionInvoiceLine"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["SharedCodec176"]:c4(),["SharedCodec250"]:c5(),["Webhook_merchant_subscription_invoice_issued_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_merchant_subscription_invoice_issued_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

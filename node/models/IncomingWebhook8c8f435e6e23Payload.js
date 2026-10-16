import { d1284 as c0, d898 as c1, d323 as c2, d903 as c3, d500 as c4, d897 as c5, d902 as c6, d1280 as c7, d1282 as c8, d1283 as c9, d1281 as c10 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1284 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1284;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook8c8f435e6e23Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec176"]:c4(),["SharedCodec250"]:c5(),["SharedCodec252"]:c6(),["SharedCodec335"]:c7(),["SharedCodec336"]:c8(),["Webhook_invoice_updated_installed_merchants"]:c9(),["Webhook_invoice_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook8c8f435e6e23Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

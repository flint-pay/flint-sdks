import { d1006 as c0, d898 as c1, d323 as c2, d903 as c3, d500 as c4, d897 as c5, d902 as c6, d1002 as c7, d1004 as c8, d1005 as c9, d1003 as c10 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1006 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1006;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook274ba21f04d5Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec176"]:c4(),["SharedCodec250"]:c5(),["SharedCodec252"]:c6(),["SharedCodec283"]:c7(),["SharedCodec284"]:c8(),["Webhook_invoice_issued_installed_merchants"]:c9(),["Webhook_invoice_issued_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook274ba21f04d5Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

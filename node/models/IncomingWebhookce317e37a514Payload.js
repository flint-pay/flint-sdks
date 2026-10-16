import { d1446 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d961 as c6, d963 as c7, d1445 as c8, d1444 as c9 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1446 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1446;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookce317e37a514Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec276"]:c6(),["SharedCodec277"]:c7(),["Webhook_invoice_refunded_installed_merchants"]:c8(),["Webhook_invoice_refunded_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookce317e37a514Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

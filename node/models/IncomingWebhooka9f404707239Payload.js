import { d1368 as c0, d898 as c1, d323 as c2, d903 as c3, d500 as c4, d897 as c5, d902 as c6, d1364 as c7, d1366 as c8, d1367 as c9, d1365 as c10 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1368 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1368;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooka9f404707239Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec176"]:c4(),["SharedCodec250"]:c5(),["SharedCodec252"]:c6(),["SharedCodec355"]:c7(),["SharedCodec356"]:c8(),["Webhook_invoice_collection_blocked_installed_merchants"]:c9(),["Webhook_invoice_collection_blocked_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooka9f404707239Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d941 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d937 as c6, d939 as c7, d940 as c8, d938 as c9 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d941 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d941;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0d891c599afbPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec269"]:c6(),["SharedCodec270"]:c7(),["Webhook_order_updated_installed_merchants"]:c8(),["Webhook_order_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0d891c599afbPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

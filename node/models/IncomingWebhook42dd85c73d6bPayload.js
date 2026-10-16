import { d1100 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d1096 as c6, d1098 as c7, d1099 as c8, d1097 as c9 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1100 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1100;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook42dd85c73d6bPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec302"]:c6(),["SharedCodec303"]:c7(),["Webhook_subscription_reactivated_installed_merchants"]:c8(),["Webhook_subscription_reactivated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook42dd85c73d6bPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

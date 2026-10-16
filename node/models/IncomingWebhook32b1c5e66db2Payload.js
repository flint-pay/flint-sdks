import { d1050 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d1046 as c6, d1048 as c7, d1049 as c8, d1047 as c9 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1050 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1050;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook32b1c5e66db2Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec293"]:c6(),["SharedCodec294"]:c7(),["Webhook_subscription_payment_failed_installed_merchants"]:c8(),["Webhook_subscription_payment_failed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook32b1c5e66db2Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

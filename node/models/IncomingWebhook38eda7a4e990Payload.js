import { d1068 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d949 as c6, d1067 as c7, d1066 as c8 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1068 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1068;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook38eda7a4e990Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec272"]:c6(),["Webhook_subscription_activated_installed_merchants"]:c7(),["Webhook_subscription_activated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook38eda7a4e990Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1109 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d1105 as c6, d1104 as c7, d1107 as c8, d1108 as c9, d1106 as c10 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1109 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1109;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook44764240a51fPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec304"]:c6(),["SharedCodec305"]:c7(),["SharedCodec306"]:c8(),["Webhook_subscription_cancellation_scheduled_installed_merchants"]:c9(),["Webhook_subscription_cancellation_scheduled_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook44764240a51fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

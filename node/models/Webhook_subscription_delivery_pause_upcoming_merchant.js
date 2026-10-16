import { d898 as c0, d500 as c1, d897 as c2, d1030 as c3, d2369 as c4, d1031 as c5 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1031 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1031;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec250"]:c2(),["SharedCodec290"]:c3(),["SubscriptionDeliveryHold"]:c4(),["Webhook_subscription_delivery_pause_upcoming_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_delivery_pause_upcoming_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

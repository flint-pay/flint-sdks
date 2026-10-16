import { d903 as c0, d902 as c1, d1032 as c2, d2369 as c3, d1033 as c4 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1033 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1033;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec252"]:c1(),["SharedCodec291"]:c2(),["SubscriptionDeliveryHold"]:c3(),["Webhook_subscription_delivery_pause_upcoming_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_delivery_pause_upcoming_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

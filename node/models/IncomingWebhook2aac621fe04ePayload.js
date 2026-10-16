import { d1034 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d1030 as c6, d1032 as c7, d2369 as c8, d1033 as c9, d1031 as c10 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1034 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1034;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook2aac621fe04ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec290"]:c6(),["SharedCodec291"]:c7(),["SubscriptionDeliveryHold"]:c8(),["Webhook_subscription_delivery_pause_upcoming_installed_merchants"]:c9(),["Webhook_subscription_delivery_pause_upcoming_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook2aac621fe04ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1065 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d1063 as c6, d2373 as c7, d2376 as c8, d1064 as c9, d1062 as c10 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1065 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1065;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook362af2129f9dPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec297"]:c6(),["SubscriptionDeliveryMigration"]:c7(),["SubscriptionDeliveryMigrationFailureReasonCount"]:c8(),["Webhook_subscription_delivery_migration_completed_installed_merchants"]:c9(),["Webhook_subscription_delivery_migration_completed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook362af2129f9dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

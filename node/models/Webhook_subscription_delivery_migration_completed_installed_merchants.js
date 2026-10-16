import { d903 as c0, d902 as c1, d1063 as c2, d2376 as c3, d1064 as c4 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1064 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1064;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec252"]:c1(),["SharedCodec297"]:c2(),["SubscriptionDeliveryMigrationFailureReasonCount"]:c3(),["Webhook_subscription_delivery_migration_completed_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_delivery_migration_completed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

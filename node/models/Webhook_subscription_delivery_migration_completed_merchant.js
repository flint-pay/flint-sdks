import { d898 as c0, d500 as c1, d897 as c2, d2373 as c3, d2376 as c4, d1062 as c5 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1062 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1062;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec250"]:c2(),["SubscriptionDeliveryMigration"]:c3(),["SubscriptionDeliveryMigrationFailureReasonCount"]:c4(),["Webhook_subscription_delivery_migration_completed_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_delivery_migration_completed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

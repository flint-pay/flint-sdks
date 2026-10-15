import { d898 as c0, d500 as c1, d897 as c2, d2373 as c3, d2376 as c4, d1062 as c5 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1062 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1062;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec250"]:c2(),["SubscriptionDeliveryMigration"]:c3(),["SubscriptionDeliveryMigrationFailureReasonCount"]:c4(),["Webhook_subscription_delivery_migration_completed_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_delivery_migration_completed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d893 as c0, d490 as c1, d892 as c2, d2357 as c3, d2360 as c4, d1060 as c5 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1060 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1060;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SubscriptionDeliveryMigration"]:c3(),["SubscriptionDeliveryMigrationFailureReasonCount"]:c4(),["Webhook_subscription_delivery_migration_completed_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_delivery_migration_completed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

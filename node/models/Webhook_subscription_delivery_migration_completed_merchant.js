import { d893 as c0, d490 as c1, d892 as c2, d2357 as c3, d2360 as c4, d1060 as c5 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1060 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1060;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SubscriptionDeliveryMigration"]:c3(),["SubscriptionDeliveryMigrationFailureReasonCount"]:c4(),["Webhook_subscription_delivery_migration_completed_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_delivery_migration_completed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

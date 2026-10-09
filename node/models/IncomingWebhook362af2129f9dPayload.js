import { d1063 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d1061 as c6, d2357 as c7, d2360 as c8, d1062 as c9, d1060 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1063 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1063;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook362af2129f9dPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec296"]:c6(),["SubscriptionDeliveryMigration"]:c7(),["SubscriptionDeliveryMigrationFailureReasonCount"]:c8(),["Webhook_subscription_delivery_migration_completed_installed_merchants"]:c9(),["Webhook_subscription_delivery_migration_completed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook362af2129f9dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1124 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d1028 as c6, d1030 as c7, d2353 as c8, d1123 as c9, d1122 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1124 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1124;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook525b56e32d02Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec289"]:c6(),["SharedCodec290"]:c7(),["SubscriptionDeliveryHold"]:c8(),["Webhook_subscription_delivery_action_required_installed_merchants"]:c9(),["Webhook_subscription_delivery_action_required_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook525b56e32d02Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d893 as c0, d490 as c1, d892 as c2, d1028 as c3, d2353 as c4, d1122 as c5 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1122 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1122;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SharedCodec289"]:c3(),["SubscriptionDeliveryHold"]:c4(),["Webhook_subscription_delivery_action_required_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_delivery_action_required_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

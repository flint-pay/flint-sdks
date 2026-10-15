import { d898 as c0, d500 as c1, d897 as c2, d1030 as c3, d2369 as c4, d1124 as c5 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1124 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1124;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec250"]:c2(),["SharedCodec290"]:c3(),["SubscriptionDeliveryHold"]:c4(),["Webhook_subscription_delivery_action_required_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_delivery_action_required_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

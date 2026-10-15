import { d903 as c0, d902 as c1, d1032 as c2, d2369 as c3, d1125 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1125 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1125;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec252"]:c1(),["SharedCodec291"]:c2(),["SubscriptionDeliveryHold"]:c3(),["Webhook_subscription_delivery_action_required_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_delivery_action_required_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

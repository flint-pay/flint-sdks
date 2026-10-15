import { d1126 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d1030 as c6, d1032 as c7, d2369 as c8, d1125 as c9, d1124 as c10 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1126 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1126;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook525b56e32d02Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec290"]:c6(),["SharedCodec291"]:c7(),["SubscriptionDeliveryHold"]:c8(),["Webhook_subscription_delivery_action_required_installed_merchants"]:c9(),["Webhook_subscription_delivery_action_required_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook525b56e32d02Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

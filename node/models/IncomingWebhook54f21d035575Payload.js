import { d1126 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d963 as c6, d1125 as c7, d1124 as c8 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1126 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1126;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook54f21d035575Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec300"]:c6(),["Webhook_subscription_resumed_installed_merchants"]:c7(),["Webhook_subscription_resumed_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook54f21d035575Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

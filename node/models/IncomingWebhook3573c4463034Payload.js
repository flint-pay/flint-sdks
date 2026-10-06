import { d1087 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d984 as c6, d1086 as c7, d1085 as c8 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1087 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1087;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3573c4463034Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec307"]:c6(),["Webhook_subscription_payment_succeeded_installed_merchants"]:c7(),["Webhook_subscription_payment_succeeded_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3573c4463034Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

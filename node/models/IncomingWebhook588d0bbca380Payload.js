import { d878 as c0, d1163 as c1, d930 as c2, d938 as c3, d525 as c4, d929 as c5, d937 as c6, d1117 as c7, d41 as c8, d1162 as c9, d1161 as c10 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1163 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1163;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCard"]:c0(),["IncomingWebhook588d0bbca380Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec199"]:c4(),["SharedCodec282"]:c5(),["SharedCodec287"]:c6(),["SharedCodec331"]:c7(),["SharedCodec6"]:c8(),["Webhook_gift_card_created_installed_merchants"]:c9(),["Webhook_gift_card_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook588d0bbca380Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

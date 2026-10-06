import { d1423 as c0, d930 as c1, d525 as c2, d929 as c3, d2537 as c4 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1423 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1423;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookbd445ea5b01aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["Webhook_dispute_lost_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookbd445ea5b01aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1134 as c0, d930 as c1, d525 as c2, d929 as c3, d2576 as c4 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1134 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1134;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook44e6923a1369Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["Webhook_payout_destination_updated_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook44e6923a1369Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

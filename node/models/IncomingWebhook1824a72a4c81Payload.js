import { d1006 as c0, d930 as c1, d525 as c2, d929 as c3, d2550 as c4 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1006 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1006;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook1824a72a4c81Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["Webhook_inventory_reservation_consumed_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook1824a72a4c81Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1147 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1143 as c6, d1145 as c7, d1146 as c8, d1144 as c9 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1147 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1147;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook4cf95bc872d3Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec338"]:c6(),["SharedCodec339"]:c7(),["Webhook_order_inventory_exception_resolved_installed_merchants"]:c8(),["Webhook_order_inventory_exception_resolved_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook4cf95bc872d3Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

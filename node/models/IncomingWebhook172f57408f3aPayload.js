import { d1005 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1001 as c6, d1003 as c7, d1004 as c8, d1002 as c9 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1005 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1005;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook172f57408f3aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec313"]:c6(),["SharedCodec314"]:c7(),["Webhook_checkout_session_invalidated_installed_merchants"]:c8(),["Webhook_checkout_session_invalidated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook172f57408f3aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1169 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d1165 as c6, d1167 as c7, d1168 as c8, d1166 as c9 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1169 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1169;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook6e888acafb4bPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec308"]:c6(),["SharedCodec309"]:c7(),["Webhook_checkout_session_closed_installed_merchants"]:c8(),["Webhook_checkout_session_closed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook6e888acafb4bPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

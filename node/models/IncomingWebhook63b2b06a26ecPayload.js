import { d1132 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d1128 as c6, d1130 as c7, d1131 as c8, d1129 as c9 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1132 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1132;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook63b2b06a26ecPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec302"]:c6(),["SharedCodec303"]:c7(),["Webhook_order_created_installed_merchants"]:c8(),["Webhook_order_created_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook63b2b06a26ecPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

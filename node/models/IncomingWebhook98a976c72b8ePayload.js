import { d1278 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d1274 as c6, d1276 as c7, d1277 as c8, d1275 as c9 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1278 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1278;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook98a976c72b8ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec328"]:c6(),["SharedCodec329"]:c7(),["Webhook_payment_method_removed_installed_merchants"]:c8(),["Webhook_payment_method_removed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook98a976c72b8ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

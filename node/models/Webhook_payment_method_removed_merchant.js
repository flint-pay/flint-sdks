import { d872 as c0, d469 as c1, d871 as c2, d1274 as c3, d1275 as c4 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1275 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1275;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec161"]:c1(),["SharedCodec237"]:c2(),["SharedCodec328"]:c3(),["Webhook_payment_method_removed_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_method_removed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

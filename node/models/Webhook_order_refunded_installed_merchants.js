import { d880 as c0, d879 as c1, d950 as c2, d1231 as c3 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1231 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1231;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec242"]:c1(),["SharedCodec270"]:c2(),["Webhook_order_refunded_installed_merchants"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_refunded_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

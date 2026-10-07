import { d1023 as c0, d872 as c1, d469 as c2, d871 as c3, d2503 as c4 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1023 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1023;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook335ccd991b2bPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec161"]:c2(),["SharedCodec237"]:c3(),["Webhook_inventory_reservation_created_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook335ccd991b2bPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

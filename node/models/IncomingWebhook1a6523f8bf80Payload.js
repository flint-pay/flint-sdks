import { d953 as c0, d872 as c1, d469 as c2, d871 as c3, d2497 as c4 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d953 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d953;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook1a6523f8bf80Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec161"]:c2(),["SharedCodec237"]:c3(),["Webhook_inventory_level_updated_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook1a6523f8bf80Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

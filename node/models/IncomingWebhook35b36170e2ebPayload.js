import { d1031 as c0, d872 as c1, d469 as c2, d871 as c3, d2501 as c4 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1031 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1031;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook35b36170e2ebPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec161"]:c2(),["SharedCodec237"]:c3(),["Webhook_inventory_reservation_committed_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook35b36170e2ebPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

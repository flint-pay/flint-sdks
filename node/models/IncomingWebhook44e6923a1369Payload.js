import { d1076 as c0, d872 as c1, d469 as c2, d871 as c3, d2528 as c4 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1076 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1076;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook44e6923a1369Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec161"]:c2(),["SharedCodec237"]:c3(),["Webhook_payout_destination_updated_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook44e6923a1369Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

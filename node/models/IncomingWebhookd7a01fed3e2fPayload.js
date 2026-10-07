import { d1424 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d914 as c6, d916 as c7, d1423 as c8, d1422 as c9 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1424 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1424;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookd7a01fed3e2fPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec259"]:c6(),["SharedCodec260"]:c7(),["Webhook_order_closed_installed_merchants"]:c8(),["Webhook_order_closed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookd7a01fed3e2fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

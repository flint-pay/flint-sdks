import { d880 as c0, d879 as c1, d899 as c2, d900 as c3, d904 as c4, d1125 as c5, d1126 as c6 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1126 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1126;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec242"]:c1(),["SharedCodec251"]:c2(),["SharedCodec252"]:c3(),["SharedCodec256"]:c4(),["SharedCodec301"]:c5(),["Webhook_order_fulfillment_shipment_created_installed_merchants"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_shipment_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

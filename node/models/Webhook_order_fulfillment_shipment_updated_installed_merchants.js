import { d880 as c0, d879 as c1, d883 as c2, d899 as c3, d900 as c4, d904 as c5, d1336 as c6, d1339 as c7, d1340 as c8 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1340 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1340;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec242"]:c1(),["SharedCodec244"]:c2(),["SharedCodec251"]:c3(),["SharedCodec252"]:c4(),["SharedCodec256"]:c5(),["SharedCodec343"]:c6(),["SharedCodec344"]:c7(),["Webhook_order_fulfillment_shipment_updated_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_shipment_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

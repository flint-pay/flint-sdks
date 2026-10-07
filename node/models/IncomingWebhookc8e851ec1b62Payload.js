import { d1395 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d899 as c6, d900 as c7, d1002 as c8, d1004 as c9, d1394 as c10, d1393 as c11 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1395 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1395;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookc8e851ec1b62Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec251"]:c6(),["SharedCodec252"]:c7(),["SharedCodec278"]:c8(),["SharedCodec279"]:c9(),["Webhook_order_fulfillment_completed_installed_merchants"]:c10(),["Webhook_order_fulfillment_completed_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookc8e851ec1b62Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

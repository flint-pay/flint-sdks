import { d1268 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d883 as c6, d899 as c7, d900 as c8, d903 as c9, d901 as c10, d902 as c11, d904 as c12, d1264 as c13, d1263 as c14, d1266 as c15, d1267 as c16, d1265 as c17 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1268 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1268;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook96e4efc9dab0Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec244"]:c6(),["SharedCodec251"]:c7(),["SharedCodec252"]:c8(),["SharedCodec253"]:c9(),["SharedCodec254"]:c10(),["SharedCodec255"]:c11(),["SharedCodec256"]:c12(),["SharedCodec323"]:c13(),["SharedCodec324"]:c14(),["SharedCodec325"]:c15(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c16(),["Webhook_order_fulfillment_package_updated_merchant"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook96e4efc9dab0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

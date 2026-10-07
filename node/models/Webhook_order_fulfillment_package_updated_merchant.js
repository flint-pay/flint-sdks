import { d872 as c0, d469 as c1, d871 as c2, d883 as c3, d899 as c4, d900 as c5, d903 as c6, d901 as c7, d902 as c8, d904 as c9, d1264 as c10, d1263 as c11, d1265 as c12 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1265 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1265;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec161"]:c1(),["SharedCodec237"]:c2(),["SharedCodec244"]:c3(),["SharedCodec251"]:c4(),["SharedCodec252"]:c5(),["SharedCodec253"]:c6(),["SharedCodec254"]:c7(),["SharedCodec255"]:c8(),["SharedCodec256"]:c9(),["SharedCodec323"]:c10(),["SharedCodec324"]:c11(),["Webhook_order_fulfillment_package_updated_merchant"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

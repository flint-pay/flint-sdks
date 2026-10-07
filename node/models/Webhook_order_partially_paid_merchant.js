import { d872 as c0, d469 as c1, d871 as c2, d874 as c3, d1505 as c4, d1504 as c5, d1503 as c6, d1496 as c7, d1495 as c8, d1498 as c9, d1497 as c10, d1500 as c11, d1499 as c12, d1502 as c13, d1501 as c14, d1506 as c15 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1506 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1506;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec161"]:c1(),["SharedCodec237"]:c2(),["SharedCodec240"]:c3(),["SharedCodec371"]:c4(),["SharedCodec372"]:c5(),["SharedCodec373"]:c6(),["SharedCodec374"]:c7(),["SharedCodec375"]:c8(),["SharedCodec376"]:c9(),["SharedCodec377"]:c10(),["SharedCodec378"]:c11(),["SharedCodec379"]:c12(),["SharedCodec380"]:c13(),["SharedCodec381"]:c14(),["Webhook_order_partially_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_partially_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

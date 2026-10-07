import { d872 as c0, d469 as c1, d871 as c2, d874 as c3, d1504 as c4, d1503 as c5, d1496 as c6, d1495 as c7, d1498 as c8, d1497 as c9, d1500 as c10, d1499 as c11, d1502 as c12, d1501 as c13, d1516 as c14, d1517 as c15 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1517 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1517;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec161"]:c1(),["SharedCodec237"]:c2(),["SharedCodec240"]:c3(),["SharedCodec372"]:c4(),["SharedCodec373"]:c5(),["SharedCodec374"]:c6(),["SharedCodec375"]:c7(),["SharedCodec376"]:c8(),["SharedCodec377"]:c9(),["SharedCodec378"]:c10(),["SharedCodec379"]:c11(),["SharedCodec380"]:c12(),["SharedCodec381"]:c13(),["SharedCodec383"]:c14(),["Webhook_order_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

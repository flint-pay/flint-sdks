import { d880 as c0, d874 as c1, d879 as c2, d1504 as c3, d1503 as c4, d1496 as c5, d1495 as c6, d1498 as c7, d1497 as c8, d1500 as c9, d1499 as c10, d1502 as c11, d1501 as c12, d1518 as c13, d1519 as c14 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1519 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1519;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec240"]:c1(),["SharedCodec242"]:c2(),["SharedCodec372"]:c3(),["SharedCodec373"]:c4(),["SharedCodec374"]:c5(),["SharedCodec375"]:c6(),["SharedCodec376"]:c7(),["SharedCodec377"]:c8(),["SharedCodec378"]:c9(),["SharedCodec379"]:c10(),["SharedCodec380"]:c11(),["SharedCodec381"]:c12(),["SharedCodec384"]:c13(),["Webhook_order_paid_installed_merchants"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

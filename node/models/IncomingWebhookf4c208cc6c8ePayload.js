import { d1509 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d874 as c5, d879 as c6, d1505 as c7, d1504 as c8, d1503 as c9, d1496 as c10, d1495 as c11, d1498 as c12, d1497 as c13, d1500 as c14, d1499 as c15, d1502 as c16, d1501 as c17, d1507 as c18, d1508 as c19, d1506 as c20 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1509 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1509;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf4c208cc6c8ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec240"]:c5(),["SharedCodec242"]:c6(),["SharedCodec371"]:c7(),["SharedCodec372"]:c8(),["SharedCodec373"]:c9(),["SharedCodec374"]:c10(),["SharedCodec375"]:c11(),["SharedCodec376"]:c12(),["SharedCodec377"]:c13(),["SharedCodec378"]:c14(),["SharedCodec379"]:c15(),["SharedCodec380"]:c16(),["SharedCodec381"]:c17(),["SharedCodec382"]:c18(),["Webhook_order_partially_paid_installed_merchants"]:c19(),["Webhook_order_partially_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf4c208cc6c8ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1536 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d911 as c5, d916 as c6, d1532 as c7, d1531 as c8, d1530 as c9, d1523 as c10, d1522 as c11, d1525 as c12, d1524 as c13, d1527 as c14, d1526 as c15, d1529 as c16, d1528 as c17, d1534 as c18, d1535 as c19, d1533 as c20 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1536 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1536;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf4c208cc6c8ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec278"]:c5(),["SharedCodec280"]:c6(),["SharedCodec409"]:c7(),["SharedCodec410"]:c8(),["SharedCodec411"]:c9(),["SharedCodec412"]:c10(),["SharedCodec413"]:c11(),["SharedCodec414"]:c12(),["SharedCodec415"]:c13(),["SharedCodec416"]:c14(),["SharedCodec417"]:c15(),["SharedCodec418"]:c16(),["SharedCodec419"]:c17(),["SharedCodec420"]:c18(),["Webhook_order_partially_paid_installed_merchants"]:c19(),["Webhook_order_partially_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf4c208cc6c8ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1554 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d895 as c5, d900 as c6, d1550 as c7, d1549 as c8, d1548 as c9, d1541 as c10, d1540 as c11, d1543 as c12, d1542 as c13, d1545 as c14, d1544 as c15, d1547 as c16, d1546 as c17, d1552 as c18, d1553 as c19, d1551 as c20 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1554 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1554;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf4c208cc6c8ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec249"]:c5(),["SharedCodec251"]:c6(),["SharedCodec389"]:c7(),["SharedCodec390"]:c8(),["SharedCodec391"]:c9(),["SharedCodec392"]:c10(),["SharedCodec393"]:c11(),["SharedCodec394"]:c12(),["SharedCodec395"]:c13(),["SharedCodec396"]:c14(),["SharedCodec397"]:c15(),["SharedCodec398"]:c16(),["SharedCodec399"]:c17(),["SharedCodec400"]:c18(),["Webhook_order_partially_paid_installed_merchants"]:c19(),["Webhook_order_partially_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf4c208cc6c8ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

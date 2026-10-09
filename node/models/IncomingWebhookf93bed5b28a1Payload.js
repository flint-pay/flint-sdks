import { d1565 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d895 as c5, d900 as c6, d1549 as c7, d1548 as c8, d1541 as c9, d1540 as c10, d1543 as c11, d1542 as c12, d1545 as c13, d1544 as c14, d1547 as c15, d1546 as c16, d1561 as c17, d1563 as c18, d1564 as c19, d1562 as c20 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1565 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1565;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf93bed5b28a1Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec249"]:c5(),["SharedCodec251"]:c6(),["SharedCodec390"]:c7(),["SharedCodec391"]:c8(),["SharedCodec392"]:c9(),["SharedCodec393"]:c10(),["SharedCodec394"]:c11(),["SharedCodec395"]:c12(),["SharedCodec396"]:c13(),["SharedCodec397"]:c14(),["SharedCodec398"]:c15(),["SharedCodec399"]:c16(),["SharedCodec401"]:c17(),["SharedCodec402"]:c18(),["Webhook_order_paid_installed_merchants"]:c19(),["Webhook_order_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf93bed5b28a1Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

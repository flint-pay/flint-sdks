import { d893 as c0, d490 as c1, d892 as c2, d895 as c3, d1549 as c4, d1548 as c5, d1541 as c6, d1540 as c7, d1543 as c8, d1542 as c9, d1545 as c10, d1544 as c11, d1547 as c12, d1546 as c13, d1561 as c14, d1562 as c15 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1562 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1562;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SharedCodec249"]:c3(),["SharedCodec390"]:c4(),["SharedCodec391"]:c5(),["SharedCodec392"]:c6(),["SharedCodec393"]:c7(),["SharedCodec394"]:c8(),["SharedCodec395"]:c9(),["SharedCodec396"]:c10(),["SharedCodec397"]:c11(),["SharedCodec398"]:c12(),["SharedCodec399"]:c13(),["SharedCodec401"]:c14(),["Webhook_order_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

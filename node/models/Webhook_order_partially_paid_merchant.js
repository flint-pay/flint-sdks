import { d893 as c0, d490 as c1, d892 as c2, d895 as c3, d1550 as c4, d1549 as c5, d1548 as c6, d1541 as c7, d1540 as c8, d1543 as c9, d1542 as c10, d1545 as c11, d1544 as c12, d1547 as c13, d1546 as c14, d1551 as c15 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1551 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1551;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SharedCodec249"]:c3(),["SharedCodec389"]:c4(),["SharedCodec390"]:c5(),["SharedCodec391"]:c6(),["SharedCodec392"]:c7(),["SharedCodec393"]:c8(),["SharedCodec394"]:c9(),["SharedCodec395"]:c10(),["SharedCodec396"]:c11(),["SharedCodec397"]:c12(),["SharedCodec398"]:c13(),["SharedCodec399"]:c14(),["Webhook_order_partially_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_partially_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d901 as c0, d895 as c1, d900 as c2, d1549 as c3, d1548 as c4, d1541 as c5, d1540 as c6, d1543 as c7, d1542 as c8, d1545 as c9, d1544 as c10, d1547 as c11, d1546 as c12, d1563 as c13, d1564 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1564 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1564;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec249"]:c1(),["SharedCodec251"]:c2(),["SharedCodec390"]:c3(),["SharedCodec391"]:c4(),["SharedCodec392"]:c5(),["SharedCodec393"]:c6(),["SharedCodec394"]:c7(),["SharedCodec395"]:c8(),["SharedCodec396"]:c9(),["SharedCodec397"]:c10(),["SharedCodec398"]:c11(),["SharedCodec399"]:c12(),["SharedCodec402"]:c13(),["Webhook_order_paid_installed_merchants"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

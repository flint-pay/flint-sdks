import { d1701 as c0, d1696 as c1, d1695 as c2, d1697 as c3, d1698 as c4, d1699 as c5, d1700 as c6 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1701 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1701;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec435"]:c1(),["SharedCodec436"]:c2(),["SharedCodec437"]:c3(),["SharedCodec438"]:c4(),["SharedCodec439"]:c5(),["SharedCodec440"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

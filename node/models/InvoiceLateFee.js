import { d1659 as c0, d1662 as c1, d74 as c2, d1660 as c3, d1661 as c4 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1659 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1659;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFee"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MoneyValue"]:c2(),["SharedCodec448"]:c3(),["SharedCodec449"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLateFee(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

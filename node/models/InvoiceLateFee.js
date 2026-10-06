import { d1666 as c0, d1669 as c1, d77 as c2, d1667 as c3, d1668 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1666 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1666;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFee"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MoneyValue"]:c2(),["SharedCodec454"]:c3(),["SharedCodec455"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLateFee(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

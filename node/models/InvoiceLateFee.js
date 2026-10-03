import { d1659 as c0, d1662 as c1, d74 as c2, d1660 as c3, d1661 as c4 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1659 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1659;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFee"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MoneyValue"]:c2(),["SharedCodec448"]:c3(),["SharedCodec449"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLateFee(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

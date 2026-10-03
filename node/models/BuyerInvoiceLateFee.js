import { d129 as c0, d1662 as c1, d74 as c2, d1660 as c3, d1661 as c4 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d129 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d129;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInvoiceLateFee"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MoneyValue"]:c2(),["SharedCodec448"]:c3(),["SharedCodec449"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerInvoiceLateFee(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

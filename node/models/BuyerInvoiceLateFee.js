import { d96 as c0, d1688 as c1, d323 as c2, d1686 as c3, d1687 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d96 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d96;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInvoiceLateFee"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MoneyValue"]:c2(),["SharedCodec433"]:c3(),["SharedCodec434"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerInvoiceLateFee(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

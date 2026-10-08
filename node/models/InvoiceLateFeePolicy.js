import { d1688 as c0, d323 as c1, d1686 as c2, d1687 as c3 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1688 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1688;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["MoneyValue"]:c1(),["SharedCodec433"]:c2(),["SharedCodec434"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLateFeePolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

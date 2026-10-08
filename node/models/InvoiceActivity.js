import { d1670 as c0, d323 as c1, d1669 as c2 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1670 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1670;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceActivity"]:c0(),["MoneyValue"]:c1(),["SharedCodec427"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceActivity(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

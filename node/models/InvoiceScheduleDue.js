import { d1725 as c0, d1723 as c1, d1724 as c2 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1725 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1725;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDue"]:c0(),["SharedCodec451"]:c1(),["SharedCodec452"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDue(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

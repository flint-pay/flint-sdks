import { d1694 as c0, d1692 as c1, d1693 as c2 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1694 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1694;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDue"]:c0(),["SharedCodec462"]:c1(),["SharedCodec463"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDue(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

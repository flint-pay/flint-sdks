import { d1689 as c0, d77 as c1, d1688 as c2 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1689 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1689;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceActivity"]:c0(),["MoneyValue"]:c1(),["SharedCodec460"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceActivity(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

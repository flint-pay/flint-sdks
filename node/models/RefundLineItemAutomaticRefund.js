import { d2123 as c0, d41 as c1 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2123 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2123;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundLineItemAutomaticRefund"]:c0(),["SharedCodec6"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundLineItemAutomaticRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d2036 as c0 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2036 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2036;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PendingPaymentActionPaymentIntentSubject"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePendingPaymentActionPaymentIntentSubject(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

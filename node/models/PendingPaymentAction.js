import { d2035 as c0, d866 as c1, d2337 as c2, d2336 as c3 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2035 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2035;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PendingPaymentAction"]:c0(),["PendingPaymentActionSubject"]:c1(),["StripePaymentClientAction"]:c2(),["StripeSetupIntentClientAction"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePendingPaymentAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

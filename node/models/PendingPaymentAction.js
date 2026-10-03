import { d1987 as c0, d839 as c1, d2290 as c2, d2289 as c3 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1987 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1987;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PendingPaymentAction"]:c0(),["PendingPaymentActionSubject"]:c1(),["StripePaymentClientAction"]:c2(),["StripeSetupIntentClientAction"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePendingPaymentAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

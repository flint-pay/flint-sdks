import { d1914 as c0, d1985 as c1, d1986 as c2, d1987 as c3, d1988 as c4, d2283 as c5, d2284 as c6, d2285 as c7 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1985 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1985;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentClientAction"]:c0(),["PendingPaymentAction"]:c1(),["PendingPaymentActionPaymentIntentSubject"]:c2(),["PendingPaymentActionSetupPaymentSourceSubject"]:c3(),["PendingPaymentActionSubject"]:c4(),["StripePaymentClientAction"]:c5(),["StripePaymentIntentClientAction"]:c6(),["StripeSetupIntentClientAction"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePendingPaymentAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

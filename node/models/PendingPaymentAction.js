import { d1961 as c0, d2032 as c1, d2033 as c2, d2034 as c3, d2035 as c4, d2333 as c5, d2334 as c6, d2335 as c7 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d2032 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2032;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentClientAction"]:c0(),["PendingPaymentAction"]:c1(),["PendingPaymentActionPaymentIntentSubject"]:c2(),["PendingPaymentActionSetupPaymentSourceSubject"]:c3(),["PendingPaymentActionSubject"]:c4(),["StripePaymentClientAction"]:c5(),["StripePaymentIntentClientAction"]:c6(),["StripeSetupIntentClientAction"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePendingPaymentAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

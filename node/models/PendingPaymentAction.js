import { d1961 as c0, d2032 as c1, d2033 as c2, d2034 as c3, d2035 as c4, d2333 as c5, d2334 as c6, d2335 as c7 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2032 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2032;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentClientAction"]:c0(),["PendingPaymentAction"]:c1(),["PendingPaymentActionPaymentIntentSubject"]:c2(),["PendingPaymentActionSetupPaymentSourceSubject"]:c3(),["PendingPaymentActionSubject"]:c4(),["StripePaymentClientAction"]:c5(),["StripePaymentIntentClientAction"]:c6(),["StripeSetupIntentClientAction"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePendingPaymentAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

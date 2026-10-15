import { d1972 as c0, d2049 as c1, d2050 as c2, d2051 as c3, d2052 as c4, d2349 as c5, d2350 as c6, d2351 as c7 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2049 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2049;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentClientAction"]:c0(),["PendingPaymentAction"]:c1(),["PendingPaymentActionPaymentIntentSubject"]:c2(),["PendingPaymentActionSetupPaymentSourceSubject"]:c3(),["PendingPaymentActionSubject"]:c4(),["StripePaymentClientAction"]:c5(),["StripePaymentIntentClientAction"]:c6(),["StripeSetupIntentClientAction"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePendingPaymentAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

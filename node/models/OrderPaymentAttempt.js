import { d772 as c0, d323 as c1, d1823 as c2, d1824 as c3, d1886 as c4, d1888 as c5, d1970 as c6, d1971 as c7, d1972 as c8, d404 as c9, d2049 as c10, d2050 as c11, d2051 as c12, d2052 as c13, d14 as c14, d1822 as c15, d1885 as c16, d2349 as c17, d2350 as c18, d2351 as c19 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1886 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1886;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["OrderPaymentAttempt"]:c4(),["OrderPaymentAttemptPaymentMethodSave"]:c5(),["PaymentAttemptGiftCardRedemption"]:c6(),["PaymentAttemptPaymentIntent"]:c7(),["PaymentClientAction"]:c8(),["PaymentErrorSummary"]:c9(),["PendingPaymentAction"]:c10(),["PendingPaymentActionPaymentIntentSubject"]:c11(),["PendingPaymentActionSetupPaymentSourceSubject"]:c12(),["PendingPaymentActionSubject"]:c13(),["SharedCodec1"]:c14(),["SharedCodec467"]:c15(),["SharedCodec480"]:c16(),["StripePaymentClientAction"]:c17(),["StripePaymentIntentClientAction"]:c18(),["StripeSetupIntentClientAction"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentAttempt(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

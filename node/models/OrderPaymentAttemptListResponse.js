import { d772 as c0, d323 as c1, d1823 as c2, d1824 as c3, d1886 as c4, d1887 as c5, d1888 as c6, d1970 as c7, d1971 as c8, d1972 as c9, d404 as c10, d2049 as c11, d2050 as c12, d2051 as c13, d2052 as c14, d2178 as c15, d2179 as c16, d14 as c17, d1822 as c18, d1885 as c19, d2349 as c20, d2350 as c21, d2351 as c22 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1887 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1887;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["OrderPaymentAttempt"]:c4(),["OrderPaymentAttemptListResponse"]:c5(),["OrderPaymentAttemptPaymentMethodSave"]:c6(),["PaymentAttemptGiftCardRedemption"]:c7(),["PaymentAttemptPaymentIntent"]:c8(),["PaymentClientAction"]:c9(),["PaymentErrorSummary"]:c10(),["PendingPaymentAction"]:c11(),["PendingPaymentActionPaymentIntentSubject"]:c12(),["PendingPaymentActionSetupPaymentSourceSubject"]:c13(),["PendingPaymentActionSubject"]:c14(),["ResponseMeta"]:c15(),["ResponseWarning"]:c16(),["SharedCodec1"]:c17(),["SharedCodec467"]:c18(),["SharedCodec480"]:c19(),["StripePaymentClientAction"]:c20(),["StripePaymentIntentClientAction"]:c21(),["StripeSetupIntentClientAction"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentAttemptListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

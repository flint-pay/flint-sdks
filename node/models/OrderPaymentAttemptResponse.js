import { d762 as c0, d323 as c1, d1820 as c2, d1821 as c3, d1880 as c4, d1882 as c5, d1959 as c6, d1960 as c7, d1961 as c8, d831 as c9, d2032 as c10, d2033 as c11, d2034 as c12, d2035 as c13, d2162 as c14, d2163 as c15, d14 as c16, d1819 as c17, d1879 as c18, d2333 as c19, d2334 as c20, d2335 as c21 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1882 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1882;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["OrderPaymentAttempt"]:c4(),["OrderPaymentAttemptResponse"]:c5(),["PaymentAttemptGiftCardRedemption"]:c6(),["PaymentAttemptPaymentIntent"]:c7(),["PaymentClientAction"]:c8(),["PaymentErrorSummary"]:c9(),["PendingPaymentAction"]:c10(),["PendingPaymentActionPaymentIntentSubject"]:c11(),["PendingPaymentActionSetupPaymentSourceSubject"]:c12(),["PendingPaymentActionSubject"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SharedCodec1"]:c16(),["SharedCodec466"]:c17(),["SharedCodec478"]:c18(),["StripePaymentClientAction"]:c19(),["StripePaymentIntentClientAction"]:c20(),["StripeSetupIntentClientAction"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentAttemptResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

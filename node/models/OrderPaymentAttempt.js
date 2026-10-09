import { d762 as c0, d323 as c1, d1820 as c2, d1821 as c3, d1880 as c4, d1959 as c5, d1960 as c6, d1961 as c7, d831 as c8, d2032 as c9, d2033 as c10, d2034 as c11, d2035 as c12, d14 as c13, d1819 as c14, d1879 as c15, d2333 as c16, d2334 as c17, d2335 as c18 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1880 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1880;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["OrderPaymentAttempt"]:c4(),["PaymentAttemptGiftCardRedemption"]:c5(),["PaymentAttemptPaymentIntent"]:c6(),["PaymentClientAction"]:c7(),["PaymentErrorSummary"]:c8(),["PendingPaymentAction"]:c9(),["PendingPaymentActionPaymentIntentSubject"]:c10(),["PendingPaymentActionSetupPaymentSourceSubject"]:c11(),["PendingPaymentActionSubject"]:c12(),["SharedCodec1"]:c13(),["SharedCodec466"]:c14(),["SharedCodec478"]:c15(),["StripePaymentClientAction"]:c16(),["StripePaymentIntentClientAction"]:c17(),["StripeSetupIntentClientAction"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentAttempt(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

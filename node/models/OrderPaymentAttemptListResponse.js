import { d789 as c0, d77 as c1, d1824 as c2, d1823 as c3, d1876 as c4, d1877 as c5, d1955 as c6, d1956 as c7, d863 as c8, d2029 as c9, d860 as c10, d2158 as c11, d2159 as c12, d14 as c13, d87 as c14, d1822 as c15, d2331 as c16, d2330 as c17 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1877 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1877;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["OrderPaymentAttempt"]:c4(),["OrderPaymentAttemptListResponse"]:c5(),["PaymentAttemptGiftCardRedemption"]:c6(),["PaymentAttemptPaymentIntent"]:c7(),["PaymentErrorSummary"]:c8(),["PendingPaymentAction"]:c9(),["PendingPaymentActionSubject"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["SharedCodec1"]:c13(),["SharedCodec21"]:c14(),["SharedCodec488"]:c15(),["StripePaymentClientAction"]:c16(),["StripeSetupIntentClientAction"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentAttemptListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

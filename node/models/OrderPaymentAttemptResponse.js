import { d741 as c0, d314 as c1, d1775 as c2, d1776 as c3, d1833 as c4, d1835 as c5, d1912 as c6, d1913 as c7, d1914 as c8, d810 as c9, d1985 as c10, d1986 as c11, d1987 as c12, d1988 as c13, d2112 as c14, d2113 as c15, d14 as c16, d1774 as c17, d1832 as c18, d2283 as c19, d2284 as c20, d2285 as c21 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1835 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1835;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["OrderPaymentAttempt"]:c4(),["OrderPaymentAttemptResponse"]:c5(),["PaymentAttemptGiftCardRedemption"]:c6(),["PaymentAttemptPaymentIntent"]:c7(),["PaymentClientAction"]:c8(),["PaymentErrorSummary"]:c9(),["PendingPaymentAction"]:c10(),["PendingPaymentActionPaymentIntentSubject"]:c11(),["PendingPaymentActionSetupPaymentSourceSubject"]:c12(),["PendingPaymentActionSubject"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SharedCodec1"]:c16(),["SharedCodec448"]:c17(),["SharedCodec460"]:c18(),["StripePaymentClientAction"]:c19(),["StripePaymentIntentClientAction"]:c20(),["StripeSetupIntentClientAction"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentAttemptResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

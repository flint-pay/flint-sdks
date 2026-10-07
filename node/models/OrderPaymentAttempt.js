import { d741 as c0, d314 as c1, d1775 as c2, d1776 as c3, d1833 as c4, d1912 as c5, d1913 as c6, d1914 as c7, d810 as c8, d1985 as c9, d1986 as c10, d1987 as c11, d1988 as c12, d14 as c13, d1774 as c14, d1832 as c15, d2283 as c16, d2284 as c17, d2285 as c18 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1833 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1833;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["OrderPaymentAttempt"]:c4(),["PaymentAttemptGiftCardRedemption"]:c5(),["PaymentAttemptPaymentIntent"]:c6(),["PaymentClientAction"]:c7(),["PaymentErrorSummary"]:c8(),["PendingPaymentAction"]:c9(),["PendingPaymentActionPaymentIntentSubject"]:c10(),["PendingPaymentActionSetupPaymentSourceSubject"]:c11(),["PendingPaymentActionSubject"]:c12(),["SharedCodec1"]:c13(),["SharedCodec448"]:c14(),["SharedCodec460"]:c15(),["StripePaymentClientAction"]:c16(),["StripePaymentIntentClientAction"]:c17(),["StripeSetupIntentClientAction"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentAttempt(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

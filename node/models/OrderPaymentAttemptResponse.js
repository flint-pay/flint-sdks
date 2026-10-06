import { d777 as c0, d77 as c1, d1797 as c2, d1796 as c3, d1849 as c4, d1851 as c5, d1928 as c6, d1929 as c7, d850 as c8, d2002 as c9, d847 as c10, d2131 as c11, d2132 as c12, d14 as c13, d87 as c14, d1795 as c15, d2304 as c16, d2303 as c17 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1851 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1851;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["OrderPaymentAttempt"]:c4(),["OrderPaymentAttemptResponse"]:c5(),["PaymentAttemptGiftCardRedemption"]:c6(),["PaymentAttemptPaymentIntent"]:c7(),["PaymentErrorSummary"]:c8(),["PendingPaymentAction"]:c9(),["PendingPaymentActionSubject"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["SharedCodec1"]:c13(),["SharedCodec21"]:c14(),["SharedCodec485"]:c15(),["StripePaymentClientAction"]:c16(),["StripeSetupIntentClientAction"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentAttemptResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

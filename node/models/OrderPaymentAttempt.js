import { d796 as c0, d77 as c1, d1830 as c2, d1829 as c3, d1882 as c4, d1961 as c5, d1962 as c6, d869 as c7, d2035 as c8, d866 as c9, d14 as c10, d92 as c11, d1828 as c12, d2337 as c13, d2336 as c14 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1882 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1882;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["OrderPaymentAttempt"]:c4(),["PaymentAttemptGiftCardRedemption"]:c5(),["PaymentAttemptPaymentIntent"]:c6(),["PaymentErrorSummary"]:c7(),["PendingPaymentAction"]:c8(),["PendingPaymentActionSubject"]:c9(),["SharedCodec1"]:c10(),["SharedCodec23"]:c11(),["SharedCodec492"]:c12(),["StripePaymentClientAction"]:c13(),["StripeSetupIntentClientAction"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentAttempt(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

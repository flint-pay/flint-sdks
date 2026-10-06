import { d789 as c0, d77 as c1, d1823 as c2, d1822 as c3, d1875 as c4, d1954 as c5, d1955 as c6, d863 as c7, d2028 as c8, d860 as c9, d14 as c10, d87 as c11, d1821 as c12, d2330 as c13, d2329 as c14 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1875 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1875;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["OrderPaymentAttempt"]:c4(),["PaymentAttemptGiftCardRedemption"]:c5(),["PaymentAttemptPaymentIntent"]:c6(),["PaymentErrorSummary"]:c7(),["PendingPaymentAction"]:c8(),["PendingPaymentActionSubject"]:c9(),["SharedCodec1"]:c10(),["SharedCodec21"]:c11(),["SharedCodec487"]:c12(),["StripePaymentClientAction"]:c13(),["StripeSetupIntentClientAction"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentAttempt(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

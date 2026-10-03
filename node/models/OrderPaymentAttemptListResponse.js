import { d774 as c0, d74 as c1, d1784 as c2, d1783 as c3, d1836 as c4, d1837 as c5, d1915 as c6, d1916 as c7, d842 as c8, d1988 as c9, d839 as c10, d2119 as c11, d2120 as c12, d84 as c13, d2291 as c14, d2290 as c15 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1837 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1837;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["OrderPaymentAttempt"]:c4(),["OrderPaymentAttemptListResponse"]:c5(),["PaymentAttemptGiftCardRedemption"]:c6(),["PaymentAttemptPaymentIntent"]:c7(),["PaymentErrorSummary"]:c8(),["PendingPaymentAction"]:c9(),["PendingPaymentActionSubject"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["SharedCodec20"]:c13(),["StripePaymentClientAction"]:c14(),["StripeSetupIntentClientAction"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentAttemptListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

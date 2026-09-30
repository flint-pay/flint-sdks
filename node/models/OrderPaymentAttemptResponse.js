import { d726 as c0, d69 as c1, d1646 as c2, d1645 as c3, d1689 as c4, d1691 as c5, d1767 as c6, d793 as c7, d1837 as c8, d790 as c9, d1959 as c10, d1960 as c11, d79 as c12, d2126 as c13, d2125 as c14 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1691 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1691;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["OrderPaymentAttempt"]:c4(),["OrderPaymentAttemptResponse"]:c5(),["PaymentAttemptPaymentIntent"]:c6(),["PaymentErrorSummary"]:c7(),["PendingPaymentAction"]:c8(),["PendingPaymentActionSubject"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["SharedCodec20"]:c12(),["StripePaymentClientAction"]:c13(),["StripeSetupIntentClientAction"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentAttemptResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d726 as c0, d69 as c1, d1646 as c2, d1645 as c3, d1689 as c4, d1767 as c5, d793 as c6, d1837 as c7, d790 as c8, d79 as c9, d2126 as c10, d2125 as c11 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1689 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1689;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["OrderPaymentAttempt"]:c4(),["PaymentAttemptPaymentIntent"]:c5(),["PaymentErrorSummary"]:c6(),["PendingPaymentAction"]:c7(),["PendingPaymentActionSubject"]:c8(),["SharedCodec20"]:c9(),["StripePaymentClientAction"]:c10(),["StripeSetupIntentClientAction"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentAttempt(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

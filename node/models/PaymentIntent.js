import { d726 as c0, d82 as c1, d88 as c2, d41 as c3, d69 as c4, d1646 as c5, d1645 as c6, d1766 as c7, d793 as c8, d1773 as c9, d796 as c10, d1803 as c11, d1804 as c12, d790 as c13, d1843 as c14, d2116 as c15, d83 as c16, d791 as c17, d89 as c18, d792 as c19, d794 as c20, d795 as c21, d797 as c22, d91 as c23, d37 as c24, d1666 as c25, d2126 as c26, d2125 as c27 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1773 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1773;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedInvoiceSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["PaymentAddOnFee"]:c7(),["PaymentErrorSummary"]:c8(),["PaymentIntent"]:c9(),["PaymentRisk"]:c10(),["PaymentSourceAchDebitSummary"]:c11(),["PaymentSourceCardSummary"]:c12(),["PendingPaymentActionSubject"]:c13(),["PricingAmounts"]:c14(),["SettlementAmounts"]:c15(),["SharedCodec21"]:c16(),["SharedCodec239"]:c17(),["SharedCodec24"]:c18(),["SharedCodec240"]:c19(),["SharedCodec241"]:c20(),["SharedCodec242"]:c21(),["SharedCodec243"]:c22(),["SharedCodec26"]:c23(),["SharedCodec5"]:c24(),["SignedMoney"]:c25(),["StripePaymentClientAction"]:c26(),["StripeSetupIntentClientAction"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentIntent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

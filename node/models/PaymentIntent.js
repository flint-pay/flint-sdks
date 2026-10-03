import { d774 as c0, d87 as c1, d93 as c2, d42 as c3, d74 as c4, d1784 as c5, d1783 as c6, d1913 as c7, d842 as c8, d1921 as c9, d845 as c10, d1953 as c11, d1954 as c12, d839 as c13, d1993 as c14, d2280 as c15, d88 as c16, d94 as c17, d96 as c18, d840 as c19, d841 as c20, d843 as c21, d844 as c22, d846 as c23, d38 as c24, d1804 as c25, d2290 as c26, d2289 as c27 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1921 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1921;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedInvoiceSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["PaymentAddOnFee"]:c7(),["PaymentErrorSummary"]:c8(),["PaymentIntent"]:c9(),["PaymentRisk"]:c10(),["PaymentSourceAchDebitSummary"]:c11(),["PaymentSourceCardSummary"]:c12(),["PendingPaymentActionSubject"]:c13(),["PricingAmounts"]:c14(),["SettlementAmounts"]:c15(),["SharedCodec21"]:c16(),["SharedCodec24"]:c17(),["SharedCodec26"]:c18(),["SharedCodec260"]:c19(),["SharedCodec261"]:c20(),["SharedCodec262"]:c21(),["SharedCodec263"]:c22(),["SharedCodec264"]:c23(),["SharedCodec5"]:c24(),["SignedMoney"]:c25(),["StripePaymentClientAction"]:c26(),["StripeSetupIntentClientAction"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentIntent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

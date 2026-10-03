import { d776 as c0, d87 as c1, d93 as c2, d42 as c3, d74 as c4, d1786 as c5, d1785 as c6, d1916 as c7, d844 as c8, d1924 as c9, d847 as c10, d1956 as c11, d1957 as c12, d841 as c13, d1996 as c14, d2283 as c15, d88 as c16, d94 as c17, d96 as c18, d842 as c19, d843 as c20, d845 as c21, d846 as c22, d848 as c23, d38 as c24, d1806 as c25, d2293 as c26, d2292 as c27 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1924 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1924;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedInvoiceSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["PaymentAddOnFee"]:c7(),["PaymentErrorSummary"]:c8(),["PaymentIntent"]:c9(),["PaymentRisk"]:c10(),["PaymentSourceAchDebitSummary"]:c11(),["PaymentSourceCardSummary"]:c12(),["PendingPaymentActionSubject"]:c13(),["PricingAmounts"]:c14(),["SettlementAmounts"]:c15(),["SharedCodec21"]:c16(),["SharedCodec24"]:c17(),["SharedCodec26"]:c18(),["SharedCodec260"]:c19(),["SharedCodec261"]:c20(),["SharedCodec262"]:c21(),["SharedCodec263"]:c22(),["SharedCodec264"]:c23(),["SharedCodec5"]:c24(),["SignedMoney"]:c25(),["StripePaymentClientAction"]:c26(),["StripeSetupIntentClientAction"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentIntent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

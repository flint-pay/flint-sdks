import { d789 as c0, d90 as c1, d96 as c2, d45 as c3, d77 as c4, d1824 as c5, d1823 as c6, d1954 as c7, d863 as c8, d1962 as c9, d866 as c10, d1994 as c11, d1995 as c12, d860 as c13, d2035 as c14, d2321 as c15, d14 as c16, d91 as c17, d97 as c18, d861 as c19, d862 as c20, d99 as c21, d864 as c22, d865 as c23, d867 as c24, d1822 as c25, d41 as c26, d226 as c27, d2331 as c28, d2330 as c29 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1962 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1962;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedInvoiceSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["PaymentAddOnFee"]:c7(),["PaymentErrorSummary"]:c8(),["PaymentIntent"]:c9(),["PaymentRisk"]:c10(),["PaymentSourceAchDebitSummary"]:c11(),["PaymentSourceCardSummary"]:c12(),["PendingPaymentActionSubject"]:c13(),["PricingAmounts"]:c14(),["SettlementAmounts"]:c15(),["SharedCodec1"]:c16(),["SharedCodec22"]:c17(),["SharedCodec25"]:c18(),["SharedCodec268"]:c19(),["SharedCodec269"]:c20(),["SharedCodec27"]:c21(),["SharedCodec270"]:c22(),["SharedCodec271"]:c23(),["SharedCodec272"]:c24(),["SharedCodec488"]:c25(),["SharedCodec6"]:c26(),["SignedMoney"]:c27(),["StripePaymentClientAction"]:c28(),["StripeSetupIntentClientAction"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentIntent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d777 as c0, d90 as c1, d96 as c2, d45 as c3, d77 as c4, d1797 as c5, d1796 as c6, d1927 as c7, d850 as c8, d1935 as c9, d853 as c10, d1967 as c11, d1968 as c12, d847 as c13, d2008 as c14, d2294 as c15, d14 as c16, d91 as c17, d97 as c18, d848 as c19, d849 as c20, d851 as c21, d99 as c22, d852 as c23, d854 as c24, d1795 as c25, d41 as c26, d223 as c27, d2304 as c28, d2303 as c29 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1935 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1935;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedInvoiceSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["PaymentAddOnFee"]:c7(),["PaymentErrorSummary"]:c8(),["PaymentIntent"]:c9(),["PaymentRisk"]:c10(),["PaymentSourceAchDebitSummary"]:c11(),["PaymentSourceCardSummary"]:c12(),["PendingPaymentActionSubject"]:c13(),["PricingAmounts"]:c14(),["SettlementAmounts"]:c15(),["SharedCodec1"]:c16(),["SharedCodec22"]:c17(),["SharedCodec25"]:c18(),["SharedCodec267"]:c19(),["SharedCodec268"]:c20(),["SharedCodec269"]:c21(),["SharedCodec27"]:c22(),["SharedCodec270"]:c23(),["SharedCodec271"]:c24(),["SharedCodec485"]:c25(),["SharedCodec6"]:c26(),["SignedMoney"]:c27(),["StripePaymentClientAction"]:c28(),["StripeSetupIntentClientAction"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentIntent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

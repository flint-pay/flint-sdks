import { d762 as c0, d90 as c1, d45 as c2, d138 as c3, d794 as c4, d795 as c5, d77 as c6, d1797 as c7, d1796 as c8, d1967 as c9, d1968 as c10, d1970 as c11, d2008 as c12, d2054 as c13, d2131 as c14, d2132 as c15, d2294 as c16, d14 as c17, d760 as c18, d761 as c19, d793 as c20, d1795 as c21, d46 as c22, d223 as c23 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d795 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d795;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["FraudWarningListResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SettlementAmounts"]:c16(),["SharedCodec1"]:c17(),["SharedCodec245"]:c18(),["SharedCodec246"]:c19(),["SharedCodec252"]:c20(),["SharedCodec485"]:c21(),["SharedCodec8"]:c22(),["SignedMoney"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFraudWarningListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d90 as c0, d45 as c1, d138 as c2, d77 as c3, d1797 as c4, d1796 as c5, d1967 as c6, d1968 as c7, d1970 as c8, d2008 as c9, d1340 as c10, d2065 as c11, d2069 as c12, d2131 as c13, d2132 as c14, d2246 as c15, d2248 as c16, d2294 as c17, d14 as c18, d363 as c19, d760 as c20, d761 as c21, d1341 as c22, d1795 as c23, d46 as c24, d223 as c25 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2248 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2248;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicIPAddressLocation"]:c10(),["PublicReviewRisk"]:c11(),["PublicRiskPaymentSummary"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["Review"]:c15(),["ReviewResponse"]:c16(),["SettlementAmounts"]:c17(),["SharedCodec1"]:c18(),["SharedCodec131"]:c19(),["SharedCodec245"]:c20(),["SharedCodec246"]:c21(),["SharedCodec378"]:c22(),["SharedCodec485"]:c23(),["SharedCodec8"]:c24(),["SignedMoney"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

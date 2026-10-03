import { d87 as c0, d42 as c1, d132 as c2, d74 as c3, d1784 as c4, d1783 as c5, d1953 as c6, d1954 as c7, d1956 as c8, d1993 as c9, d1333 as c10, d2052 as c11, d2056 as c12, d2118 as c13, d2119 as c14, d2233 as c15, d2235 as c16, d2280 as c17, d752 as c18, d753 as c19, d1334 as c20, d1335 as c21, d43 as c22, d1804 as c23 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2235 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2235;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicIPAddressLocation"]:c10(),["PublicReviewRisk"]:c11(),["PublicRiskPaymentSummary"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["Review"]:c15(),["ReviewResponse"]:c16(),["SettlementAmounts"]:c17(),["SharedCodec239"]:c18(),["SharedCodec240"]:c19(),["SharedCodec372"]:c20(),["SharedCodec373"]:c21(),["SharedCodec7"]:c22(),["SignedMoney"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

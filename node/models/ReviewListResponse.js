import { d90 as c0, d42 as c1, d100 as c2, d314 as c3, d1775 as c4, d1776 as c5, d1950 as c6, d1951 as c7, d1953 as c8, d1992 as c9, d1306 as c10, d2045 as c11, d2049 as c12, d2112 as c13, d2113 as c14, d2227 as c15, d2228 as c16, d2274 as c17, d14 as c18, d329 as c19, d721 as c20, d722 as c21, d1307 as c22, d1774 as c23, d43 as c24, d1970 as c25 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2228 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2228;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicIPAddressLocation"]:c10(),["PublicReviewRisk"]:c11(),["PublicRiskPaymentSummary"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["Review"]:c15(),["ReviewListResponse"]:c16(),["SettlementAmounts"]:c17(),["SharedCodec1"]:c18(),["SharedCodec105"]:c19(),["SharedCodec212"]:c20(),["SharedCodec213"]:c21(),["SharedCodec335"]:c22(),["SharedCodec448"]:c23(),["SharedCodec5"]:c24(),["SignedMoney"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReviewListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

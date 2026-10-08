import { d90 as c0, d42 as c1, d100 as c2, d323 as c3, d1820 as c4, d1821 as c5, d1997 as c6, d1998 as c7, d2000 as c8, d2039 as c9, d1351 as c10, d2094 as c11, d2098 as c12, d2162 as c13, d2163 as c14, d2277 as c15, d2279 as c16, d2324 as c17, d14 as c18, d338 as c19, d742 as c20, d743 as c21, d1352 as c22, d1819 as c23, d43 as c24, d2017 as c25 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2279 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2279;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicIPAddressLocation"]:c10(),["PublicReviewRisk"]:c11(),["PublicRiskPaymentSummary"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["Review"]:c15(),["ReviewResponse"]:c16(),["SettlementAmounts"]:c17(),["SharedCodec1"]:c18(),["SharedCodec107"]:c19(),["SharedCodec221"]:c20(),["SharedCodec222"]:c21(),["SharedCodec353"]:c22(),["SharedCodec466"]:c23(),["SharedCodec5"]:c24(),["SignedMoney"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

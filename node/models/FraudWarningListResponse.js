import { d744 as c0, d90 as c1, d42 as c2, d100 as c3, d777 as c4, d778 as c5, d323 as c6, d1820 as c7, d1821 as c8, d1997 as c9, d1998 as c10, d2000 as c11, d2039 as c12, d2084 as c13, d2162 as c14, d2163 as c15, d2324 as c16, d14 as c17, d742 as c18, d743 as c19, d776 as c20, d1819 as c21, d43 as c22, d2017 as c23 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d778 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d778;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["FraudWarningListResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SettlementAmounts"]:c16(),["SharedCodec1"]:c17(),["SharedCodec221"]:c18(),["SharedCodec222"]:c19(),["SharedCodec226"]:c20(),["SharedCodec466"]:c21(),["SharedCodec5"]:c22(),["SignedMoney"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFraudWarningListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

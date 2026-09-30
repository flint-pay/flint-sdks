import { d82 as c0, d41 as c1, d704 as c2, d69 as c3, d1646 as c4, d1645 as c5, d1803 as c6, d1804 as c7, d1806 as c8, d1843 as c9, d1202 as c10, d1902 as c11, d1906 as c12, d1959 as c13, d1960 as c14, d2074 as c15, d2075 as c16, d2116 as c17, d703 as c18, d705 as c19, d1203 as c20, d1204 as c21, d42 as c22, d1666 as c23 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2075 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2075;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicIPAddressLocation"]:c10(),["PublicReviewRisk"]:c11(),["PublicRiskPaymentSummary"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["Review"]:c15(),["ReviewListResponse"]:c16(),["SettlementAmounts"]:c17(),["SharedCodec218"]:c18(),["SharedCodec219"]:c19(),["SharedCodec331"]:c20(),["SharedCodec332"]:c21(),["SharedCodec7"]:c22(),["SignedMoney"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReviewListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

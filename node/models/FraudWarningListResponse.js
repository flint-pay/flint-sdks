import { d754 as c0, d87 as c1, d42 as c2, d132 as c3, d786 as c4, d787 as c5, d74 as c6, d1784 as c7, d1783 as c8, d1954 as c9, d1955 as c10, d1957 as c11, d1994 as c12, d2042 as c13, d2119 as c14, d2120 as c15, d2281 as c16, d752 as c17, d753 as c18, d785 as c19, d43 as c20, d1804 as c21 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d787 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d787;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["FraudWarningListResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SettlementAmounts"]:c16(),["SharedCodec239"]:c17(),["SharedCodec240"]:c18(),["SharedCodec245"]:c19(),["SharedCodec7"]:c20(),["SignedMoney"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFraudWarningListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

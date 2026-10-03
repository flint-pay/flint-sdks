import { d754 as c0, d87 as c1, d42 as c2, d132 as c3, d786 as c4, d788 as c5, d74 as c6, d1784 as c7, d1783 as c8, d1953 as c9, d1954 as c10, d1956 as c11, d1993 as c12, d2041 as c13, d2118 as c14, d2119 as c15, d2280 as c16, d752 as c17, d753 as c18, d785 as c19, d43 as c20, d1804 as c21 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d788 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d788;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["FraudWarningResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SettlementAmounts"]:c16(),["SharedCodec239"]:c17(),["SharedCodec240"]:c18(),["SharedCodec245"]:c19(),["SharedCodec7"]:c20(),["SignedMoney"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFraudWarningResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

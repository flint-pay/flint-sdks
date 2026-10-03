import { d756 as c0, d87 as c1, d42 as c2, d132 as c3, d788 as c4, d74 as c5, d1956 as c6, d1957 as c7, d1959 as c8, d1996 as c9, d2044 as c10, d2283 as c11, d754 as c12, d755 as c13, d787 as c14, d43 as c15, d1806 as c16 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d788 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d788;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["MoneyValue"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicFraudWarningPaymentSummary"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec239"]:c12(),["SharedCodec240"]:c13(),["SharedCodec245"]:c14(),["SharedCodec7"]:c15(),["SignedMoney"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFraudWarning(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

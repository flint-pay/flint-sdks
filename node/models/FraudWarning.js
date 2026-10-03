import { d754 as c0, d87 as c1, d42 as c2, d132 as c3, d786 as c4, d74 as c5, d1954 as c6, d1955 as c7, d1957 as c8, d1994 as c9, d2042 as c10, d2281 as c11, d752 as c12, d753 as c13, d785 as c14, d43 as c15, d1804 as c16 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d786 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d786;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["MoneyValue"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicFraudWarningPaymentSummary"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec239"]:c12(),["SharedCodec240"]:c13(),["SharedCodec245"]:c14(),["SharedCodec7"]:c15(),["SignedMoney"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFraudWarning(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

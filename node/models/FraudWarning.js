import { d744 as c0, d90 as c1, d42 as c2, d100 as c3, d777 as c4, d323 as c5, d1997 as c6, d1998 as c7, d2000 as c8, d2039 as c9, d2084 as c10, d2324 as c11, d742 as c12, d743 as c13, d776 as c14, d43 as c15, d2017 as c16 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d777 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d777;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["MoneyValue"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicFraudWarningPaymentSummary"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec221"]:c12(),["SharedCodec222"]:c13(),["SharedCodec226"]:c14(),["SharedCodec5"]:c15(),["SignedMoney"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFraudWarning(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

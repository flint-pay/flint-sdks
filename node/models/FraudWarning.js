import { d777 as c0, d95 as c1, d45 as c2, d146 as c3, d813 as c4, d77 as c5, d2000 as c6, d2001 as c7, d2003 as c8, d2041 as c9, d2087 as c10, d2327 as c11, d775 as c12, d776 as c13, d812 as c14, d46 as c15, d227 as c16 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d813 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d813;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["MoneyValue"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicFraudWarningPaymentSummary"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec250"]:c12(),["SharedCodec251"]:c13(),["SharedCodec257"]:c14(),["SharedCodec8"]:c15(),["SignedMoney"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFraudWarning(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d777 as c0, d95 as c1, d45 as c2, d146 as c3, d813 as c4, d815 as c5, d77 as c6, d1830 as c7, d1829 as c8, d2000 as c9, d2001 as c10, d2003 as c11, d2041 as c12, d2087 as c13, d2164 as c14, d2165 as c15, d2327 as c16, d14 as c17, d775 as c18, d776 as c19, d812 as c20, d1828 as c21, d46 as c22, d227 as c23 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d815 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d815;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["FraudWarningResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SettlementAmounts"]:c16(),["SharedCodec1"]:c17(),["SharedCodec250"]:c18(),["SharedCodec251"]:c19(),["SharedCodec257"]:c20(),["SharedCodec492"]:c21(),["SharedCodec8"]:c22(),["SignedMoney"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFraudWarningResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

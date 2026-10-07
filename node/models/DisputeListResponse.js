import { d777 as c0, d778 as c1, d95 as c2, d45 as c3, d146 as c4, d77 as c5, d1830 as c6, d1829 as c7, d2000 as c8, d2001 as c9, d2003 as c10, d2041 as c11, d2164 as c12, d2165 as c13, d2327 as c14, d14 as c15, d775 as c16, d776 as c17, d1828 as c18, d46 as c19, d227 as c20 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d778 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d778;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["DisputeListResponse"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PaymentSourceAchDebitSummary"]:c8(),["PaymentSourceCardSummary"]:c9(),["PaymentSourceSummary"]:c10(),["PricingAmounts"]:c11(),["ResponseMeta"]:c12(),["ResponseWarning"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec1"]:c15(),["SharedCodec250"]:c16(),["SharedCodec251"]:c17(),["SharedCodec492"]:c18(),["SharedCodec8"]:c19(),["SignedMoney"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDisputeListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

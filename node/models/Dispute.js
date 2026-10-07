import { d777 as c0, d95 as c1, d45 as c2, d146 as c3, d77 as c4, d2000 as c5, d2001 as c6, d2003 as c7, d2041 as c8, d2327 as c9, d775 as c10, d776 as c11, d46 as c12, d227 as c13 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d777 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d777;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["MoneyValue"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec250"]:c10(),["SharedCodec251"]:c11(),["SharedCodec8"]:c12(),["SignedMoney"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDispute(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

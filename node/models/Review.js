import { d95 as c0, d45 as c1, d146 as c2, d77 as c3, d2000 as c4, d2001 as c5, d2003 as c6, d2041 as c7, d1370 as c8, d2098 as c9, d2102 as c10, d2279 as c11, d2327 as c12, d369 as c13, d775 as c14, d776 as c15, d1371 as c16, d46 as c17, d227 as c18 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2279 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2279;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["PaymentSourceAchDebitSummary"]:c4(),["PaymentSourceCardSummary"]:c5(),["PaymentSourceSummary"]:c6(),["PricingAmounts"]:c7(),["PublicIPAddressLocation"]:c8(),["PublicReviewRisk"]:c9(),["PublicRiskPaymentSummary"]:c10(),["Review"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec131"]:c13(),["SharedCodec250"]:c14(),["SharedCodec251"]:c15(),["SharedCodec384"]:c16(),["SharedCodec8"]:c17(),["SignedMoney"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

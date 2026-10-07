import { d95 as c0, d45 as c1, d146 as c2, d77 as c3, d1830 as c4, d1829 as c5, d2000 as c6, d2001 as c7, d2003 as c8, d2041 as c9, d1370 as c10, d2098 as c11, d2102 as c12, d2164 as c13, d2165 as c14, d2279 as c15, d2281 as c16, d2327 as c17, d14 as c18, d369 as c19, d775 as c20, d776 as c21, d1371 as c22, d1828 as c23, d46 as c24, d227 as c25 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2281 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2281;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicIPAddressLocation"]:c10(),["PublicReviewRisk"]:c11(),["PublicRiskPaymentSummary"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["Review"]:c15(),["ReviewResponse"]:c16(),["SettlementAmounts"]:c17(),["SharedCodec1"]:c18(),["SharedCodec131"]:c19(),["SharedCodec250"]:c20(),["SharedCodec251"]:c21(),["SharedCodec384"]:c22(),["SharedCodec492"]:c23(),["SharedCodec8"]:c24(),["SignedMoney"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

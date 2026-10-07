import { d95 as c0, d45 as c1, d146 as c2, d936 as c3, d77 as c4, d2000 as c5, d2001 as c6, d2003 as c7, d2041 as c8, d1370 as c9, d2098 as c10, d2102 as c11, d2279 as c12, d2327 as c13, d369 as c14, d526 as c15, d775 as c16, d776 as c17, d935 as c18, d1371 as c19, d46 as c20, d227 as c21, d1520 as c22 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1520 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1520;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["Review"]:c12(),["SettlementAmounts"]:c13(),["SharedCodec131"]:c14(),["SharedCodec199"]:c15(),["SharedCodec250"]:c16(),["SharedCodec251"]:c17(),["SharedCodec286"]:c18(),["SharedCodec384"]:c19(),["SharedCodec8"]:c20(),["SignedMoney"]:c21(),["Webhook_review_opened_merchant"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_opened_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

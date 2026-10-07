import { d95 as c0, d45 as c1, d146 as c2, d77 as c3, d944 as c4, d2000 as c5, d2001 as c6, d2003 as c7, d2041 as c8, d1370 as c9, d2098 as c10, d2102 as c11, d2327 as c12, d369 as c13, d775 as c14, d776 as c15, d943 as c16, d1372 as c17, d1371 as c18, d46 as c19, d227 as c20, d1373 as c21 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1373 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1373;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec131"]:c13(),["SharedCodec250"]:c14(),["SharedCodec251"]:c15(),["SharedCodec291"]:c16(),["SharedCodec383"]:c17(),["SharedCodec384"]:c18(),["SharedCodec8"]:c19(),["SignedMoney"]:c20(),["Webhook_review_closed_installed_merchants"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_closed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

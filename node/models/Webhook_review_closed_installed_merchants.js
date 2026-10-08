import { d90 as c0, d42 as c1, d100 as c2, d323 as c3, d901 as c4, d1997 as c5, d1998 as c6, d2000 as c7, d2039 as c8, d1351 as c9, d2094 as c10, d2098 as c11, d2324 as c12, d338 as c13, d742 as c14, d743 as c15, d900 as c16, d1353 as c17, d1352 as c18, d43 as c19, d2017 as c20, d1354 as c21 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1354 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1354;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec107"]:c13(),["SharedCodec221"]:c14(),["SharedCodec222"]:c15(),["SharedCodec251"]:c16(),["SharedCodec352"]:c17(),["SharedCodec353"]:c18(),["SharedCodec5"]:c19(),["SignedMoney"]:c20(),["Webhook_review_closed_installed_merchants"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_closed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

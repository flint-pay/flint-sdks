import { d87 as c0, d42 as c1, d132 as c2, d909 as c3, d74 as c4, d1954 as c5, d1955 as c6, d1957 as c7, d1994 as c8, d1333 as c9, d2053 as c10, d2057 as c11, d2234 as c12, d2281 as c13, d515 as c14, d752 as c15, d753 as c16, d908 as c17, d1334 as c18, d1335 as c19, d43 as c20, d1804 as c21, d1332 as c22 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1332 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1332;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["Review"]:c12(),["SettlementAmounts"]:c13(),["SharedCodec197"]:c14(),["SharedCodec239"]:c15(),["SharedCodec240"]:c16(),["SharedCodec275"]:c17(),["SharedCodec372"]:c18(),["SharedCodec373"]:c19(),["SharedCodec7"]:c20(),["SignedMoney"]:c21(),["Webhook_review_closed_merchant"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_closed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

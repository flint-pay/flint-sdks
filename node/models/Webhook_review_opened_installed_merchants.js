import { d87 as c0, d42 as c1, d132 as c2, d74 as c3, d917 as c4, d1954 as c5, d1955 as c6, d1957 as c7, d1994 as c8, d1333 as c9, d2053 as c10, d2057 as c11, d2281 as c12, d752 as c13, d753 as c14, d916 as c15, d1336 as c16, d1334 as c17, d1335 as c18, d43 as c19, d1804 as c20, d1483 as c21 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1483 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1483;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec239"]:c13(),["SharedCodec240"]:c14(),["SharedCodec280"]:c15(),["SharedCodec371"]:c16(),["SharedCodec372"]:c17(),["SharedCodec373"]:c18(),["SharedCodec7"]:c19(),["SignedMoney"]:c20(),["Webhook_review_opened_installed_merchants"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_opened_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

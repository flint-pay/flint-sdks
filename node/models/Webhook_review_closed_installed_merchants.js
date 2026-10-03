import { d87 as c0, d42 as c1, d132 as c2, d74 as c3, d919 as c4, d1956 as c5, d1957 as c6, d1959 as c7, d1996 as c8, d1335 as c9, d2055 as c10, d2059 as c11, d2283 as c12, d754 as c13, d755 as c14, d918 as c15, d1338 as c16, d1336 as c17, d1337 as c18, d43 as c19, d1806 as c20, d1339 as c21 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1339 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1339;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec239"]:c13(),["SharedCodec240"]:c14(),["SharedCodec280"]:c15(),["SharedCodec371"]:c16(),["SharedCodec372"]:c17(),["SharedCodec373"]:c18(),["SharedCodec7"]:c19(),["SignedMoney"]:c20(),["Webhook_review_closed_installed_merchants"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_closed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

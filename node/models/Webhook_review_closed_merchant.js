import { d90 as c0, d45 as c1, d138 as c2, d916 as c3, d77 as c4, d1967 as c5, d1968 as c6, d1970 as c7, d2008 as c8, d1340 as c9, d2065 as c10, d2069 as c11, d2246 as c12, d2294 as c13, d363 as c14, d520 as c15, d760 as c16, d761 as c17, d915 as c18, d1341 as c19, d46 as c20, d223 as c21, d1339 as c22 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1339 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1339;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["Review"]:c12(),["SettlementAmounts"]:c13(),["SharedCodec131"]:c14(),["SharedCodec199"]:c15(),["SharedCodec245"]:c16(),["SharedCodec246"]:c17(),["SharedCodec281"]:c18(),["SharedCodec378"]:c19(),["SharedCodec8"]:c20(),["SignedMoney"]:c21(),["Webhook_review_closed_merchant"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_closed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

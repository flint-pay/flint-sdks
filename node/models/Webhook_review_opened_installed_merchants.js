import { d90 as c0, d45 as c1, d138 as c2, d77 as c3, d924 as c4, d1967 as c5, d1968 as c6, d1970 as c7, d2008 as c8, d1340 as c9, d2065 as c10, d2069 as c11, d2294 as c12, d363 as c13, d760 as c14, d761 as c15, d923 as c16, d1342 as c17, d1341 as c18, d46 as c19, d223 as c20, d1489 as c21 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1489 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1489;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec131"]:c13(),["SharedCodec245"]:c14(),["SharedCodec246"]:c15(),["SharedCodec286"]:c16(),["SharedCodec377"]:c17(),["SharedCodec378"]:c18(),["SharedCodec8"]:c19(),["SignedMoney"]:c20(),["Webhook_review_opened_installed_merchants"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_opened_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

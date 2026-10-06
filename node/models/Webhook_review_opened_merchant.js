import { d90 as c0, d45 as c1, d142 as c2, d930 as c3, d77 as c4, d1993 as c5, d1994 as c6, d1996 as c7, d2034 as c8, d1364 as c9, d2091 as c10, d2095 as c11, d2272 as c12, d2320 as c13, d368 as c14, d525 as c15, d769 as c16, d770 as c17, d929 as c18, d1365 as c19, d46 as c20, d226 as c21, d1513 as c22 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1513 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1513;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["Review"]:c12(),["SettlementAmounts"]:c13(),["SharedCodec131"]:c14(),["SharedCodec199"]:c15(),["SharedCodec246"]:c16(),["SharedCodec247"]:c17(),["SharedCodec282"]:c18(),["SharedCodec380"]:c19(),["SharedCodec8"]:c20(),["SignedMoney"]:c21(),["Webhook_review_opened_merchant"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_opened_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

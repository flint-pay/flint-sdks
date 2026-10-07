import { d90 as c0, d42 as c1, d100 as c2, d872 as c3, d314 as c4, d1950 as c5, d1951 as c6, d1953 as c7, d1992 as c8, d1306 as c9, d2045 as c10, d2049 as c11, d2227 as c12, d2274 as c13, d329 as c14, d469 as c15, d721 as c16, d722 as c17, d871 as c18, d1307 as c19, d43 as c20, d1970 as c21, d1305 as c22 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1305 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1305;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["Review"]:c12(),["SettlementAmounts"]:c13(),["SharedCodec105"]:c14(),["SharedCodec161"]:c15(),["SharedCodec212"]:c16(),["SharedCodec213"]:c17(),["SharedCodec237"]:c18(),["SharedCodec335"]:c19(),["SharedCodec5"]:c20(),["SignedMoney"]:c21(),["Webhook_review_closed_merchant"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_closed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

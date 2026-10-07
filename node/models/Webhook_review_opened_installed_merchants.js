import { d90 as c0, d42 as c1, d100 as c2, d314 as c3, d880 as c4, d1950 as c5, d1951 as c6, d1953 as c7, d1992 as c8, d1306 as c9, d2045 as c10, d2049 as c11, d2274 as c12, d329 as c13, d721 as c14, d722 as c15, d879 as c16, d1308 as c17, d1307 as c18, d43 as c19, d1970 as c20, d1457 as c21 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1457 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1457;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec105"]:c13(),["SharedCodec212"]:c14(),["SharedCodec213"]:c15(),["SharedCodec242"]:c16(),["SharedCodec334"]:c17(),["SharedCodec335"]:c18(),["SharedCodec5"]:c19(),["SignedMoney"]:c20(),["Webhook_review_opened_installed_merchants"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_opened_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

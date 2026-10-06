import { d90 as c0, d45 as c1, d142 as c2, d77 as c3, d938 as c4, d1993 as c5, d1994 as c6, d1996 as c7, d2034 as c8, d1364 as c9, d2091 as c10, d2095 as c11, d2320 as c12, d368 as c13, d769 as c14, d770 as c15, d937 as c16, d1366 as c17, d1365 as c18, d46 as c19, d226 as c20, d1367 as c21 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1367 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1367;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec131"]:c13(),["SharedCodec246"]:c14(),["SharedCodec247"]:c15(),["SharedCodec287"]:c16(),["SharedCodec379"]:c17(),["SharedCodec380"]:c18(),["SharedCodec8"]:c19(),["SignedMoney"]:c20(),["Webhook_review_closed_installed_merchants"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_closed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

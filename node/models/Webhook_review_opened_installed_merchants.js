import { d90 as c0, d42 as c1, d100 as c2, d323 as c3, d903 as c4, d2014 as c5, d2015 as c6, d2017 as c7, d2056 as c8, d1353 as c9, d2111 as c10, d2115 as c11, d2340 as c12, d338 as c13, d752 as c14, d753 as c15, d902 as c16, d1355 as c17, d1354 as c18, d43 as c19, d2034 as c20, d1504 as c21 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1504 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1504;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec107"]:c13(),["SharedCodec227"]:c14(),["SharedCodec228"]:c15(),["SharedCodec252"]:c16(),["SharedCodec353"]:c17(),["SharedCodec354"]:c18(),["SharedCodec5"]:c19(),["SignedMoney"]:c20(),["Webhook_review_opened_installed_merchants"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_opened_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

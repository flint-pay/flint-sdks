import { d90 as c0, d42 as c1, d100 as c2, d898 as c3, d323 as c4, d2014 as c5, d2015 as c6, d2017 as c7, d2056 as c8, d1353 as c9, d2112 as c10, d2116 as c11, d2293 as c12, d2340 as c13, d338 as c14, d500 as c15, d752 as c16, d753 as c17, d897 as c18, d1354 as c19, d43 as c20, d2034 as c21, d1352 as c22 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1352 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1352;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["Review"]:c12(),["SettlementAmounts"]:c13(),["SharedCodec107"]:c14(),["SharedCodec176"]:c15(),["SharedCodec227"]:c16(),["SharedCodec228"]:c17(),["SharedCodec250"]:c18(),["SharedCodec354"]:c19(),["SharedCodec5"]:c20(),["SignedMoney"]:c21(),["Webhook_review_closed_merchant"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_closed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

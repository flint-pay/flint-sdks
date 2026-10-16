import { d90 as c0, d42 as c1, d100 as c2, d323 as c3, d2014 as c4, d2015 as c5, d2017 as c6, d2056 as c7, d1353 as c8, d2112 as c9, d2116 as c10, d2293 as c11, d2340 as c12, d338 as c13, d752 as c14, d753 as c15, d1354 as c16, d43 as c17, d2034 as c18 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2293 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["PaymentSourceAchDebitSummary"]:c4(),["PaymentSourceCardSummary"]:c5(),["PaymentSourceSummary"]:c6(),["PricingAmounts"]:c7(),["PublicIPAddressLocation"]:c8(),["PublicReviewRisk"]:c9(),["PublicRiskPaymentSummary"]:c10(),["Review"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec107"]:c13(),["SharedCodec227"]:c14(),["SharedCodec228"]:c15(),["SharedCodec354"]:c16(),["SharedCodec5"]:c17(),["SignedMoney"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

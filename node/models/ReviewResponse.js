import { d90 as c0, d42 as c1, d100 as c2, d323 as c3, d1823 as c4, d1824 as c5, d2014 as c6, d2015 as c7, d2017 as c8, d2056 as c9, d1353 as c10, d2111 as c11, d2115 as c12, d2178 as c13, d2179 as c14, d2293 as c15, d2295 as c16, d2340 as c17, d14 as c18, d338 as c19, d752 as c20, d753 as c21, d1354 as c22, d1822 as c23, d43 as c24, d2034 as c25 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2295 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2295;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicIPAddressLocation"]:c10(),["PublicReviewRisk"]:c11(),["PublicRiskPaymentSummary"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["Review"]:c15(),["ReviewResponse"]:c16(),["SettlementAmounts"]:c17(),["SharedCodec1"]:c18(),["SharedCodec107"]:c19(),["SharedCodec227"]:c20(),["SharedCodec228"]:c21(),["SharedCodec354"]:c22(),["SharedCodec467"]:c23(),["SharedCodec5"]:c24(),["SignedMoney"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

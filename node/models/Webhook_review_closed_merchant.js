import { d90 as c0, d42 as c1, d100 as c2, d893 as c3, d323 as c4, d1997 as c5, d1998 as c6, d2000 as c7, d2039 as c8, d1351 as c9, d2094 as c10, d2098 as c11, d2277 as c12, d2324 as c13, d338 as c14, d490 as c15, d742 as c16, d743 as c17, d892 as c18, d1352 as c19, d43 as c20, d2017 as c21, d1350 as c22 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1350 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1350;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["Review"]:c12(),["SettlementAmounts"]:c13(),["SharedCodec107"]:c14(),["SharedCodec170"]:c15(),["SharedCodec221"]:c16(),["SharedCodec222"]:c17(),["SharedCodec246"]:c18(),["SharedCodec353"]:c19(),["SharedCodec5"]:c20(),["SignedMoney"]:c21(),["Webhook_review_closed_merchant"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_closed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

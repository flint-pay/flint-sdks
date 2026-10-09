import { d90 as c0, d42 as c1, d100 as c2, d323 as c3, d1997 as c4, d1998 as c5, d2000 as c6, d2039 as c7, d1351 as c8, d2094 as c9, d2098 as c10, d2277 as c11, d2324 as c12, d338 as c13, d742 as c14, d743 as c15, d1352 as c16, d43 as c17, d2017 as c18 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2277 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2277;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["PaymentSourceAchDebitSummary"]:c4(),["PaymentSourceCardSummary"]:c5(),["PaymentSourceSummary"]:c6(),["PricingAmounts"]:c7(),["PublicIPAddressLocation"]:c8(),["PublicReviewRisk"]:c9(),["PublicRiskPaymentSummary"]:c10(),["Review"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec107"]:c13(),["SharedCodec221"]:c14(),["SharedCodec222"]:c15(),["SharedCodec353"]:c16(),["SharedCodec5"]:c17(),["SignedMoney"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

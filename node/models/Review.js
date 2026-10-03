import { d87 as c0, d42 as c1, d132 as c2, d74 as c3, d1954 as c4, d1955 as c5, d1957 as c6, d1994 as c7, d1333 as c8, d2053 as c9, d2057 as c10, d2234 as c11, d2281 as c12, d752 as c13, d753 as c14, d1334 as c15, d1335 as c16, d43 as c17, d1804 as c18 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2234 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2234;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["PaymentSourceAchDebitSummary"]:c4(),["PaymentSourceCardSummary"]:c5(),["PaymentSourceSummary"]:c6(),["PricingAmounts"]:c7(),["PublicIPAddressLocation"]:c8(),["PublicReviewRisk"]:c9(),["PublicRiskPaymentSummary"]:c10(),["Review"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec239"]:c13(),["SharedCodec240"]:c14(),["SharedCodec372"]:c15(),["SharedCodec373"]:c16(),["SharedCodec7"]:c17(),["SignedMoney"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

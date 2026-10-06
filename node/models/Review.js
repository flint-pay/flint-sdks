import { d90 as c0, d45 as c1, d142 as c2, d77 as c3, d1993 as c4, d1994 as c5, d1996 as c6, d2034 as c7, d1364 as c8, d2091 as c9, d2095 as c10, d2272 as c11, d2320 as c12, d368 as c13, d769 as c14, d770 as c15, d1365 as c16, d46 as c17, d226 as c18 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2272 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2272;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["PaymentSourceAchDebitSummary"]:c4(),["PaymentSourceCardSummary"]:c5(),["PaymentSourceSummary"]:c6(),["PricingAmounts"]:c7(),["PublicIPAddressLocation"]:c8(),["PublicReviewRisk"]:c9(),["PublicRiskPaymentSummary"]:c10(),["Review"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec131"]:c13(),["SharedCodec246"]:c14(),["SharedCodec247"]:c15(),["SharedCodec380"]:c16(),["SharedCodec8"]:c17(),["SignedMoney"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

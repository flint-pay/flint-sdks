import { d87 as c0, d42 as c1, d132 as c2, d911 as c3, d74 as c4, d1956 as c5, d1957 as c6, d1959 as c7, d1996 as c8, d1335 as c9, d2055 as c10, d2059 as c11, d2236 as c12, d2283 as c13, d517 as c14, d754 as c15, d755 as c16, d910 as c17, d1336 as c18, d1337 as c19, d43 as c20, d1806 as c21, d1334 as c22 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1334 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1334;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["Review"]:c12(),["SettlementAmounts"]:c13(),["SharedCodec197"]:c14(),["SharedCodec239"]:c15(),["SharedCodec240"]:c16(),["SharedCodec275"]:c17(),["SharedCodec372"]:c18(),["SharedCodec373"]:c19(),["SharedCodec7"]:c20(),["SignedMoney"]:c21(),["Webhook_review_closed_merchant"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_closed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

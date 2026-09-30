import { d82 as c0, d41 as c1, d704 as c2, d815 as c3, d69 as c4, d1803 as c5, d1804 as c6, d1806 as c7, d1843 as c8, d1202 as c9, d1902 as c10, d1906 as c11, d2074 as c12, d2116 as c13, d468 as c14, d703 as c15, d705 as c16, d814 as c17, d1203 as c18, d1204 as c19, d42 as c20, d1666 as c21, d1345 as c22 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1345 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1345;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["Review"]:c12(),["SettlementAmounts"]:c13(),["SharedCodec176"]:c14(),["SharedCodec218"]:c15(),["SharedCodec219"]:c16(),["SharedCodec244"]:c17(),["SharedCodec331"]:c18(),["SharedCodec332"]:c19(),["SharedCodec7"]:c20(),["SignedMoney"]:c21(),["Webhook_review_opened_merchant"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_opened_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

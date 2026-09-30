import { d82 as c0, d41 as c1, d704 as c2, d69 as c3, d823 as c4, d1803 as c5, d1804 as c6, d1806 as c7, d1843 as c8, d1202 as c9, d1902 as c10, d1906 as c11, d2116 as c12, d703 as c13, d705 as c14, d822 as c15, d1205 as c16, d1203 as c17, d1204 as c18, d42 as c19, d1666 as c20, d1346 as c21 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1346 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1346;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["PublicIPAddressLocation"]:c9(),["PublicReviewRisk"]:c10(),["PublicRiskPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec218"]:c13(),["SharedCodec219"]:c14(),["SharedCodec249"]:c15(),["SharedCodec330"]:c16(),["SharedCodec331"]:c17(),["SharedCodec332"]:c18(),["SharedCodec7"]:c19(),["SignedMoney"]:c20(),["Webhook_review_opened_installed_merchants"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_review_opened_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

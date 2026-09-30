import { d706 as c0, d82 as c1, d41 as c2, d704 as c3, d738 as c4, d1221 as c5, d815 as c6, d69 as c7, d823 as c8, d1803 as c9, d1804 as c10, d1806 as c11, d1843 as c12, d1891 as c13, d2116 as c14, d468 as c15, d703 as c16, d705 as c17, d737 as c18, d814 as c19, d822 as c20, d949 as c21, d42 as c22, d1666 as c23, d1220 as c24, d1219 as c25 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1221 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1221;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["IncomingWebhookac68e02edc21Payload"]:c5(),["MerchantWebhookEnvelope"]:c6(),["MoneyValue"]:c7(),["PartnerWebhookEnvelope"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec176"]:c15(),["SharedCodec218"]:c16(),["SharedCodec219"]:c17(),["SharedCodec224"]:c18(),["SharedCodec244"]:c19(),["SharedCodec249"]:c20(),["SharedCodec285"]:c21(),["SharedCodec7"]:c22(),["SignedMoney"]:c23(),["Webhook_fraud_warning_updated_installed_merchants"]:c24(),["Webhook_fraud_warning_updated_merchant"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookac68e02edc21Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d754 as c0, d87 as c1, d42 as c2, d132 as c3, d786 as c4, d1352 as c5, d909 as c6, d74 as c7, d917 as c8, d1954 as c9, d1955 as c10, d1957 as c11, d1994 as c12, d2042 as c13, d2281 as c14, d515 as c15, d752 as c16, d753 as c17, d785 as c18, d908 as c19, d916 as c20, d1051 as c21, d43 as c22, d1804 as c23, d1351 as c24, d1350 as c25 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1352 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1352;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["IncomingWebhookac68e02edc21Payload"]:c5(),["MerchantWebhookEnvelope"]:c6(),["MoneyValue"]:c7(),["PartnerWebhookEnvelope"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec197"]:c15(),["SharedCodec239"]:c16(),["SharedCodec240"]:c17(),["SharedCodec245"]:c18(),["SharedCodec275"]:c19(),["SharedCodec280"]:c20(),["SharedCodec318"]:c21(),["SharedCodec7"]:c22(),["SignedMoney"]:c23(),["Webhook_fraud_warning_updated_installed_merchants"]:c24(),["Webhook_fraud_warning_updated_merchant"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookac68e02edc21Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

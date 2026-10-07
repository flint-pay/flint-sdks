import { d723 as c0, d90 as c1, d42 as c2, d100 as c3, d756 as c4, d1324 as c5, d872 as c6, d314 as c7, d880 as c8, d1950 as c9, d1951 as c10, d1953 as c11, d1992 as c12, d2035 as c13, d2274 as c14, d469 as c15, d721 as c16, d722 as c17, d755 as c18, d871 as c19, d879 as c20, d1014 as c21, d43 as c22, d1970 as c23, d1323 as c24, d1322 as c25 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1324 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1324;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["IncomingWebhookac68e02edc21Payload"]:c5(),["MerchantWebhookEnvelope"]:c6(),["MoneyValue"]:c7(),["PartnerWebhookEnvelope"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec161"]:c15(),["SharedCodec212"]:c16(),["SharedCodec213"]:c17(),["SharedCodec217"]:c18(),["SharedCodec237"]:c19(),["SharedCodec242"]:c20(),["SharedCodec280"]:c21(),["SharedCodec5"]:c22(),["SignedMoney"]:c23(),["Webhook_fraud_warning_updated_installed_merchants"]:c24(),["Webhook_fraud_warning_updated_merchant"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookac68e02edc21Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d762 as c0, d90 as c1, d45 as c2, d138 as c3, d794 as c4, d1358 as c5, d916 as c6, d77 as c7, d924 as c8, d1967 as c9, d1968 as c10, d1970 as c11, d2008 as c12, d2054 as c13, d2294 as c14, d520 as c15, d760 as c16, d761 as c17, d793 as c18, d915 as c19, d923 as c20, d1058 as c21, d46 as c22, d223 as c23, d1357 as c24, d1356 as c25 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1358 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1358;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["IncomingWebhookac68e02edc21Payload"]:c5(),["MerchantWebhookEnvelope"]:c6(),["MoneyValue"]:c7(),["PartnerWebhookEnvelope"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec199"]:c15(),["SharedCodec245"]:c16(),["SharedCodec246"]:c17(),["SharedCodec252"]:c18(),["SharedCodec281"]:c19(),["SharedCodec286"]:c20(),["SharedCodec324"]:c21(),["SharedCodec8"]:c22(),["SignedMoney"]:c23(),["Webhook_fraud_warning_updated_installed_merchants"]:c24(),["Webhook_fraud_warning_updated_merchant"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookac68e02edc21Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d762 as c0, d90 as c1, d45 as c2, d138 as c3, d794 as c4, d916 as c5, d77 as c6, d1967 as c7, d1968 as c8, d1970 as c9, d2008 as c10, d2054 as c11, d2294 as c12, d520 as c13, d760 as c14, d761 as c15, d793 as c16, d915 as c17, d46 as c18, d223 as c19, d1057 as c20 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1057 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1057;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["MerchantWebhookEnvelope"]:c5(),["MoneyValue"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["PublicFraudWarningPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec199"]:c13(),["SharedCodec245"]:c14(),["SharedCodec246"]:c15(),["SharedCodec252"]:c16(),["SharedCodec281"]:c17(),["SharedCodec8"]:c18(),["SignedMoney"]:c19(),["Webhook_fraud_warning_created_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_fraud_warning_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

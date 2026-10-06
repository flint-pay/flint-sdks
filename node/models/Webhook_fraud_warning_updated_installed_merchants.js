import { d762 as c0, d90 as c1, d45 as c2, d138 as c3, d77 as c4, d924 as c5, d1967 as c6, d1968 as c7, d1970 as c8, d2008 as c9, d2054 as c10, d2294 as c11, d760 as c12, d761 as c13, d793 as c14, d923 as c15, d1058 as c16, d46 as c17, d223 as c18, d1357 as c19 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1357 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1357;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["MoneyValue"]:c4(),["PartnerWebhookEnvelope"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicFraudWarningPaymentSummary"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec245"]:c12(),["SharedCodec246"]:c13(),["SharedCodec252"]:c14(),["SharedCodec286"]:c15(),["SharedCodec324"]:c16(),["SharedCodec8"]:c17(),["SignedMoney"]:c18(),["Webhook_fraud_warning_updated_installed_merchants"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_fraud_warning_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

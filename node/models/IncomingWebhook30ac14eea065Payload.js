import { d771 as c0, d90 as c1, d45 as c2, d141 as c3, d806 as c4, d1074 as c5, d930 as c6, d77 as c7, d938 as c8, d1994 as c9, d1995 as c10, d1997 as c11, d2035 as c12, d2081 as c13, d2321 as c14, d525 as c15, d769 as c16, d770 as c17, d805 as c18, d929 as c19, d937 as c20, d1072 as c21, d46 as c22, d226 as c23, d1073 as c24, d1071 as c25 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1074 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1074;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["IncomingWebhook30ac14eea065Payload"]:c5(),["MerchantWebhookEnvelope"]:c6(),["MoneyValue"]:c7(),["PartnerWebhookEnvelope"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec199"]:c15(),["SharedCodec246"]:c16(),["SharedCodec247"]:c17(),["SharedCodec253"]:c18(),["SharedCodec282"]:c19(),["SharedCodec287"]:c20(),["SharedCodec325"]:c21(),["SharedCodec8"]:c22(),["SignedMoney"]:c23(),["Webhook_fraud_warning_created_installed_merchants"]:c24(),["Webhook_fraud_warning_created_merchant"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook30ac14eea065Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

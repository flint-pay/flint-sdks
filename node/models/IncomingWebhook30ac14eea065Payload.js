import { d777 as c0, d95 as c1, d45 as c2, d146 as c3, d813 as c4, d1080 as c5, d936 as c6, d77 as c7, d944 as c8, d2000 as c9, d2001 as c10, d2003 as c11, d2041 as c12, d2087 as c13, d2327 as c14, d526 as c15, d775 as c16, d776 as c17, d812 as c18, d935 as c19, d943 as c20, d1078 as c21, d46 as c22, d227 as c23, d1079 as c24, d1077 as c25 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1080 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1080;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["IncomingWebhook30ac14eea065Payload"]:c5(),["MerchantWebhookEnvelope"]:c6(),["MoneyValue"]:c7(),["PartnerWebhookEnvelope"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec199"]:c15(),["SharedCodec250"]:c16(),["SharedCodec251"]:c17(),["SharedCodec257"]:c18(),["SharedCodec286"]:c19(),["SharedCodec291"]:c20(),["SharedCodec329"]:c21(),["SharedCodec8"]:c22(),["SignedMoney"]:c23(),["Webhook_fraud_warning_created_installed_merchants"]:c24(),["Webhook_fraud_warning_created_merchant"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook30ac14eea065Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

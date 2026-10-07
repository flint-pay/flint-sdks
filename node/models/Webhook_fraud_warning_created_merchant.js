import { d777 as c0, d95 as c1, d45 as c2, d146 as c3, d813 as c4, d936 as c5, d77 as c6, d2000 as c7, d2001 as c8, d2003 as c9, d2041 as c10, d2087 as c11, d2327 as c12, d526 as c13, d775 as c14, d776 as c15, d812 as c16, d935 as c17, d46 as c18, d227 as c19, d1077 as c20 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1077 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1077;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["MerchantWebhookEnvelope"]:c5(),["MoneyValue"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["PublicFraudWarningPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec199"]:c13(),["SharedCodec250"]:c14(),["SharedCodec251"]:c15(),["SharedCodec257"]:c16(),["SharedCodec286"]:c17(),["SharedCodec8"]:c18(),["SignedMoney"]:c19(),["Webhook_fraud_warning_created_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_fraud_warning_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

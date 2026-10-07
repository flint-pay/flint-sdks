import { d777 as c0, d95 as c1, d45 as c2, d146 as c3, d77 as c4, d944 as c5, d2000 as c6, d2001 as c7, d2003 as c8, d2041 as c9, d2087 as c10, d2327 as c11, d775 as c12, d776 as c13, d812 as c14, d943 as c15, d1078 as c16, d46 as c17, d227 as c18, d1079 as c19 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1079 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1079;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["MoneyValue"]:c4(),["PartnerWebhookEnvelope"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicFraudWarningPaymentSummary"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec250"]:c12(),["SharedCodec251"]:c13(),["SharedCodec257"]:c14(),["SharedCodec291"]:c15(),["SharedCodec329"]:c16(),["SharedCodec8"]:c17(),["SignedMoney"]:c18(),["Webhook_fraud_warning_created_installed_merchants"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_fraud_warning_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d754 as c0, d87 as c1, d42 as c2, d132 as c3, d786 as c4, d909 as c5, d74 as c6, d1953 as c7, d1954 as c8, d1956 as c9, d1993 as c10, d2041 as c11, d2280 as c12, d515 as c13, d752 as c14, d753 as c15, d785 as c16, d908 as c17, d43 as c18, d1804 as c19, d1350 as c20 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1350 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1350;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["MerchantWebhookEnvelope"]:c5(),["MoneyValue"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["PublicFraudWarningPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec197"]:c13(),["SharedCodec239"]:c14(),["SharedCodec240"]:c15(),["SharedCodec245"]:c16(),["SharedCodec275"]:c17(),["SharedCodec7"]:c18(),["SignedMoney"]:c19(),["Webhook_fraud_warning_updated_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_fraud_warning_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

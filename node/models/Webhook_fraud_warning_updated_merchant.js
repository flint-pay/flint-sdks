import { d723 as c0, d90 as c1, d42 as c2, d100 as c3, d756 as c4, d872 as c5, d314 as c6, d1950 as c7, d1951 as c8, d1953 as c9, d1992 as c10, d2035 as c11, d2274 as c12, d469 as c13, d721 as c14, d722 as c15, d755 as c16, d871 as c17, d43 as c18, d1970 as c19, d1322 as c20 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1322 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1322;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["MerchantWebhookEnvelope"]:c5(),["MoneyValue"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["PublicFraudWarningPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec161"]:c13(),["SharedCodec212"]:c14(),["SharedCodec213"]:c15(),["SharedCodec217"]:c16(),["SharedCodec237"]:c17(),["SharedCodec5"]:c18(),["SignedMoney"]:c19(),["Webhook_fraud_warning_updated_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_fraud_warning_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

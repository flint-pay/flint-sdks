import { d723 as c0, d90 as c1, d42 as c2, d100 as c3, d314 as c4, d880 as c5, d1950 as c6, d1951 as c7, d1953 as c8, d1992 as c9, d2035 as c10, d2274 as c11, d721 as c12, d722 as c13, d755 as c14, d879 as c15, d1014 as c16, d43 as c17, d1970 as c18, d1323 as c19 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1323 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1323;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["MoneyValue"]:c4(),["PartnerWebhookEnvelope"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicFraudWarningPaymentSummary"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec212"]:c12(),["SharedCodec213"]:c13(),["SharedCodec217"]:c14(),["SharedCodec242"]:c15(),["SharedCodec280"]:c16(),["SharedCodec5"]:c17(),["SignedMoney"]:c18(),["Webhook_fraud_warning_updated_installed_merchants"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_fraud_warning_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

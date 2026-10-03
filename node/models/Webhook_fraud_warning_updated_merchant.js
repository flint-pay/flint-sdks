import { d756 as c0, d87 as c1, d42 as c2, d132 as c3, d788 as c4, d911 as c5, d74 as c6, d1956 as c7, d1957 as c8, d1959 as c9, d1996 as c10, d2044 as c11, d2283 as c12, d517 as c13, d754 as c14, d755 as c15, d787 as c16, d910 as c17, d43 as c18, d1806 as c19, d1352 as c20 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1352 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1352;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["MerchantWebhookEnvelope"]:c5(),["MoneyValue"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["PublicFraudWarningPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec197"]:c13(),["SharedCodec239"]:c14(),["SharedCodec240"]:c15(),["SharedCodec245"]:c16(),["SharedCodec275"]:c17(),["SharedCodec7"]:c18(),["SignedMoney"]:c19(),["Webhook_fraud_warning_updated_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_fraud_warning_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

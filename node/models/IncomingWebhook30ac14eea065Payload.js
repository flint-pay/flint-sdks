import { d756 as c0, d87 as c1, d42 as c2, d132 as c3, d788 as c4, d1055 as c5, d911 as c6, d74 as c7, d919 as c8, d1956 as c9, d1957 as c10, d1959 as c11, d1996 as c12, d2044 as c13, d2283 as c14, d517 as c15, d754 as c16, d755 as c17, d787 as c18, d910 as c19, d918 as c20, d1053 as c21, d43 as c22, d1806 as c23, d1054 as c24, d1052 as c25 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1055 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1055;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["IncomingWebhook30ac14eea065Payload"]:c5(),["MerchantWebhookEnvelope"]:c6(),["MoneyValue"]:c7(),["PartnerWebhookEnvelope"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec197"]:c15(),["SharedCodec239"]:c16(),["SharedCodec240"]:c17(),["SharedCodec245"]:c18(),["SharedCodec275"]:c19(),["SharedCodec280"]:c20(),["SharedCodec318"]:c21(),["SharedCodec7"]:c22(),["SignedMoney"]:c23(),["Webhook_fraud_warning_created_installed_merchants"]:c24(),["Webhook_fraud_warning_created_merchant"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook30ac14eea065Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

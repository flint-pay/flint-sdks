import { d754 as c0, d90 as c1, d42 as c2, d100 as c3, d787 as c4, d1371 as c5, d898 as c6, d323 as c7, d903 as c8, d2014 as c9, d2015 as c10, d2017 as c11, d2056 as c12, d2101 as c13, d2340 as c14, d500 as c15, d752 as c16, d753 as c17, d786 as c18, d897 as c19, d902 as c20, d1042 as c21, d43 as c22, d2034 as c23, d1370 as c24, d1369 as c25 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1371 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1371;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["IncomingWebhookac68e02edc21Payload"]:c5(),["MerchantWebhookEnvelope"]:c6(),["MoneyValue"]:c7(),["PartnerWebhookEnvelope"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec176"]:c15(),["SharedCodec227"]:c16(),["SharedCodec228"]:c17(),["SharedCodec232"]:c18(),["SharedCodec250"]:c19(),["SharedCodec252"]:c20(),["SharedCodec292"]:c21(),["SharedCodec5"]:c22(),["SignedMoney"]:c23(),["Webhook_fraud_warning_updated_installed_merchants"]:c24(),["Webhook_fraud_warning_updated_merchant"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookac68e02edc21Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

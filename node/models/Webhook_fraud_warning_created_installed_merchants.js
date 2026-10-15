import { d754 as c0, d90 as c1, d42 as c2, d100 as c3, d323 as c4, d903 as c5, d2014 as c6, d2015 as c7, d2017 as c8, d2056 as c9, d2101 as c10, d2340 as c11, d752 as c12, d753 as c13, d786 as c14, d902 as c15, d1042 as c16, d43 as c17, d2034 as c18, d1043 as c19 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1043 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1043;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["MoneyValue"]:c4(),["PartnerWebhookEnvelope"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicFraudWarningPaymentSummary"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec227"]:c12(),["SharedCodec228"]:c13(),["SharedCodec232"]:c14(),["SharedCodec252"]:c15(),["SharedCodec292"]:c16(),["SharedCodec5"]:c17(),["SignedMoney"]:c18(),["Webhook_fraud_warning_created_installed_merchants"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_fraud_warning_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

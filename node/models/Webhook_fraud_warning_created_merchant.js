import { d754 as c0, d90 as c1, d42 as c2, d100 as c3, d787 as c4, d898 as c5, d323 as c6, d2014 as c7, d2015 as c8, d2017 as c9, d2056 as c10, d2101 as c11, d2340 as c12, d500 as c13, d752 as c14, d753 as c15, d786 as c16, d897 as c17, d43 as c18, d2034 as c19, d1041 as c20 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1041 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1041;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["MerchantWebhookEnvelope"]:c5(),["MoneyValue"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["PublicFraudWarningPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec176"]:c13(),["SharedCodec227"]:c14(),["SharedCodec228"]:c15(),["SharedCodec232"]:c16(),["SharedCodec250"]:c17(),["SharedCodec5"]:c18(),["SignedMoney"]:c19(),["Webhook_fraud_warning_created_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_fraud_warning_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

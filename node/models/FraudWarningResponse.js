import { d754 as c0, d90 as c1, d42 as c2, d100 as c3, d787 as c4, d789 as c5, d323 as c6, d1823 as c7, d1824 as c8, d2014 as c9, d2015 as c10, d2017 as c11, d2056 as c12, d2101 as c13, d2178 as c14, d2179 as c15, d2340 as c16, d14 as c17, d752 as c18, d753 as c19, d786 as c20, d1822 as c21, d43 as c22, d2034 as c23 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d789 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d789;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["FraudWarningResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SettlementAmounts"]:c16(),["SharedCodec1"]:c17(),["SharedCodec227"]:c18(),["SharedCodec228"]:c19(),["SharedCodec232"]:c20(),["SharedCodec467"]:c21(),["SharedCodec5"]:c22(),["SignedMoney"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFraudWarningResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

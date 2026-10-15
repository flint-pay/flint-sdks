import { d754 as c0, d756 as c1, d90 as c2, d42 as c3, d100 as c4, d323 as c5, d1823 as c6, d1824 as c7, d2014 as c8, d2015 as c9, d2017 as c10, d2056 as c11, d2178 as c12, d2179 as c13, d2340 as c14, d14 as c15, d752 as c16, d753 as c17, d1822 as c18, d43 as c19, d2034 as c20 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d756 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d756;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["DisputeResponse"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PaymentSourceAchDebitSummary"]:c8(),["PaymentSourceCardSummary"]:c9(),["PaymentSourceSummary"]:c10(),["PricingAmounts"]:c11(),["ResponseMeta"]:c12(),["ResponseWarning"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec1"]:c15(),["SharedCodec227"]:c16(),["SharedCodec228"]:c17(),["SharedCodec467"]:c18(),["SharedCodec5"]:c19(),["SignedMoney"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDisputeResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

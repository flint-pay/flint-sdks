import { d754 as c0, d90 as c1, d42 as c2, d100 as c3, d323 as c4, d2014 as c5, d2015 as c6, d2017 as c7, d2056 as c8, d2340 as c9, d752 as c10, d753 as c11, d43 as c12, d2034 as c13 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d754 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d754;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["MoneyValue"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec227"]:c10(),["SharedCodec228"]:c11(),["SharedCodec5"]:c12(),["SignedMoney"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDispute(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

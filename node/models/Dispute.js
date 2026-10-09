import { d744 as c0, d90 as c1, d42 as c2, d100 as c3, d323 as c4, d1997 as c5, d1998 as c6, d2000 as c7, d2039 as c8, d2324 as c9, d742 as c10, d743 as c11, d43 as c12, d2017 as c13 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d744 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d744;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["MoneyValue"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec221"]:c10(),["SharedCodec222"]:c11(),["SharedCodec5"]:c12(),["SignedMoney"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDispute(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

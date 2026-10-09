import { d744 as c0, d745 as c1, d90 as c2, d42 as c3, d100 as c4, d323 as c5, d1820 as c6, d1821 as c7, d1997 as c8, d1998 as c9, d2000 as c10, d2039 as c11, d2162 as c12, d2163 as c13, d2324 as c14, d14 as c15, d742 as c16, d743 as c17, d1819 as c18, d43 as c19, d2017 as c20 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d745 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d745;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["DisputeListResponse"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PaymentSourceAchDebitSummary"]:c8(),["PaymentSourceCardSummary"]:c9(),["PaymentSourceSummary"]:c10(),["PricingAmounts"]:c11(),["ResponseMeta"]:c12(),["ResponseWarning"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec1"]:c15(),["SharedCodec221"]:c16(),["SharedCodec222"]:c17(),["SharedCodec466"]:c18(),["SharedCodec5"]:c19(),["SignedMoney"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDisputeListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

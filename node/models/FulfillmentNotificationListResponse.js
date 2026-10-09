import { d42 as c0, d793 as c1, d794 as c2, d323 as c3, d1820 as c4, d1821 as c5, d2039 as c6, d2162 as c7, d2163 as c8, d2324 as c9, d14 as c10, d792 as c11, d1819 as c12, d43 as c13, d2017 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d794 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d794;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentNotification"]:c1(),["FulfillmentNotificationListResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec1"]:c10(),["SharedCodec227"]:c11(),["SharedCodec466"]:c12(),["SharedCodec5"]:c13(),["SignedMoney"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentNotificationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d42 as c0, d323 as c1, d1820 as c2, d1821 as c3, d1915 as c4, d1917 as c5, d2039 as c6, d2162 as c7, d2163 as c8, d2324 as c9, d14 as c10, d92 as c11, d1819 as c12, d2017 as c13 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1917 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1917;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PackageItem"]:c4(),["PackageItemResponse"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec1"]:c10(),["SharedCodec17"]:c11(),["SharedCodec466"]:c12(),["SignedMoney"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageItemResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

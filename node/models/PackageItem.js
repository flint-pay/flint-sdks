import { d42 as c0, d323 as c1, d1915 as c2, d2039 as c3, d2324 as c4, d92 as c5, d2017 as c6 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1915 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1915;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["PackageItem"]:c2(),["PricingAmounts"]:c3(),["SettlementAmounts"]:c4(),["SharedCodec17"]:c5(),["SignedMoney"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d42 as c0, d74 as c1, d1784 as c2, d1783 as c3, d1870 as c4, d1872 as c5, d1993 as c6, d2118 as c7, d2119 as c8, d2280 as c9, d96 as c10, d1804 as c11 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1872 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1872;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PackageItem"]:c4(),["PackageItemResponse"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec26"]:c10(),["SignedMoney"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageItemResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

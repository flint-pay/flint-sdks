import { d45 as c0, d77 as c1, d1823 as c2, d1822 as c3, d1910 as c4, d1912 as c5, d2034 as c6, d2157 as c7, d2158 as c8, d2320 as c9, d14 as c10, d99 as c11, d1821 as c12, d226 as c13 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1912 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1912;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PackageItem"]:c4(),["PackageItemResponse"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec1"]:c10(),["SharedCodec27"]:c11(),["SharedCodec487"]:c12(),["SignedMoney"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageItemResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

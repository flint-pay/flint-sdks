import { d42 as c0, d323 as c1, d1823 as c2, d1824 as c3, d1926 as c4, d1927 as c5, d2056 as c6, d2178 as c7, d2179 as c8, d2340 as c9, d14 as c10, d92 as c11, d1822 as c12, d2034 as c13 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1927 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1927;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PackageItem"]:c4(),["PackageItemListResponse"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec1"]:c10(),["SharedCodec17"]:c11(),["SharedCodec467"]:c12(),["SignedMoney"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageItemListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d42 as c0, d74 as c1, d1786 as c2, d1785 as c3, d1873 as c4, d1875 as c5, d1996 as c6, d2121 as c7, d2122 as c8, d2283 as c9, d96 as c10, d1806 as c11 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1875 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1875;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PackageItem"]:c4(),["PackageItemResponse"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec26"]:c10(),["SignedMoney"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageItemResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

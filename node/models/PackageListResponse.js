import { d42 as c0, d74 as c1, d1784 as c2, d1783 as c3, d766 as c4, d1873 as c5, d1993 as c6, d2118 as c7, d2119 as c8, d2230 as c9, d2280 as c10, d96 as c11, d2283 as c12, d2284 as c13, d1804 as c14 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1873 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1873;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["Package"]:c4(),["PackageListResponse"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["ReturnShipmentLineItemAllocation"]:c9(),["SettlementAmounts"]:c10(),["SharedCodec26"]:c11(),["ShippingDimensions"]:c12(),["ShippingWeight"]:c13(),["SignedMoney"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

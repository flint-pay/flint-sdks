import { d45 as c0, d77 as c1, d1824 as c2, d1823 as c3, d785 as c4, d1914 as c5, d2035 as c6, d2158 as c7, d2159 as c8, d2270 as c9, d2321 as c10, d14 as c11, d99 as c12, d1822 as c13, d2324 as c14, d2325 as c15, d226 as c16 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1914 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1914;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["Package"]:c4(),["PackageListResponse"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["ReturnShipmentLineItemAllocation"]:c9(),["SettlementAmounts"]:c10(),["SharedCodec1"]:c11(),["SharedCodec27"]:c12(),["SharedCodec488"]:c13(),["ShippingDimensions"]:c14(),["ShippingWeight"]:c15(),["SignedMoney"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

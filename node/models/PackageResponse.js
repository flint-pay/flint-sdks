import { d45 as c0, d77 as c1, d1823 as c2, d1822 as c3, d785 as c4, d1914 as c5, d2034 as c6, d2157 as c7, d2158 as c8, d2269 as c9, d2320 as c10, d14 as c11, d99 as c12, d1821 as c13, d2323 as c14, d2324 as c15, d226 as c16 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1914 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1914;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["Package"]:c4(),["PackageResponse"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["ReturnShipmentLineItemAllocation"]:c9(),["SettlementAmounts"]:c10(),["SharedCodec1"]:c11(),["SharedCodec27"]:c12(),["SharedCodec487"]:c13(),["ShippingDimensions"]:c14(),["ShippingWeight"]:c15(),["SignedMoney"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

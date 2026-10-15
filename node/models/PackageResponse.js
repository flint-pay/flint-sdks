import { d42 as c0, d323 as c1, d1823 as c2, d1824 as c3, d766 as c4, d1930 as c5, d2056 as c6, d2178 as c7, d2179 as c8, d2289 as c9, d2340 as c10, d14 as c11, d92 as c12, d1822 as c13, d2343 as c14, d2344 as c15, d2034 as c16 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1930 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1930;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["Package"]:c4(),["PackageResponse"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["ReturnShipmentLineItemAllocation"]:c9(),["SettlementAmounts"]:c10(),["SharedCodec1"]:c11(),["SharedCodec17"]:c12(),["SharedCodec467"]:c13(),["ShippingDimensions"]:c14(),["ShippingWeight"]:c15(),["SignedMoney"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

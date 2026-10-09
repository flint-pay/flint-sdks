import { d42 as c0, d783 as c1, d793 as c2, d323 as c3, d1820 as c4, d1821 as c5, d756 as c6, d1920 as c7, d1921 as c8, d1922 as c9, d2039 as c10, d2162 as c11, d2163 as c12, d2273 as c13, d2324 as c14, d14 as c15, d92 as c16, d792 as c17, d1819 as c18, d43 as c19, d2327 as c20, d2328 as c21, d2017 as c22 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1921 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1921;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PackageStatusUpdate"]:c7(),["PackageStatusUpdateResponse"]:c8(),["PackageStatusUpdateResult"]:c9(),["PricingAmounts"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["ReturnShipmentLineItemAllocation"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec1"]:c15(),["SharedCodec17"]:c16(),["SharedCodec227"]:c17(),["SharedCodec466"]:c18(),["SharedCodec5"]:c19(),["ShippingDimensions"]:c20(),["ShippingWeight"]:c21(),["SignedMoney"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageStatusUpdateResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

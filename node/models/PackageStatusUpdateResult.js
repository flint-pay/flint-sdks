import { d42 as c0, d762 as c1, d772 as c2, d314 as c3, d735 as c4, d1873 as c5, d1875 as c6, d1992 as c7, d2223 as c8, d2274 as c9, d92 as c10, d771 as c11, d43 as c12, d2277 as c13, d2278 as c14, d1970 as c15 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1875 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1875;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["Package"]:c4(),["PackageStatusUpdate"]:c5(),["PackageStatusUpdateResult"]:c6(),["PricingAmounts"]:c7(),["ReturnShipmentLineItemAllocation"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec17"]:c10(),["SharedCodec218"]:c11(),["SharedCodec5"]:c12(),["ShippingDimensions"]:c13(),["ShippingWeight"]:c14(),["SignedMoney"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageStatusUpdateResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

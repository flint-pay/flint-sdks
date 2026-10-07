import { d382 as c0, d42 as c1, d762 as c2, d772 as c3, d314 as c4, d735 as c5, d1992 as c6, d2223 as c7, d2274 as c8, d92 as c9, d771 as c10, d43 as c11, d2277 as c12, d2278 as c13, d1970 as c14 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d382 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d382;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageResult"]:c0(),["ExpandedOrderSummary"]:c1(),["FulfillmentEvent"]:c2(),["FulfillmentNotification"]:c3(),["MoneyValue"]:c4(),["Package"]:c5(),["PricingAmounts"]:c6(),["ReturnShipmentLineItemAllocation"]:c7(),["SettlementAmounts"]:c8(),["SharedCodec17"]:c9(),["SharedCodec218"]:c10(),["SharedCodec5"]:c11(),["ShippingDimensions"]:c12(),["ShippingWeight"]:c13(),["SignedMoney"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePackageResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

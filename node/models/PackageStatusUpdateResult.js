import { d42 as c0, d792 as c1, d802 as c2, d74 as c3, d766 as c4, d1875 as c5, d1877 as c6, d1993 as c7, d2230 as c8, d2280 as c9, d801 as c10, d96 as c11, d43 as c12, d2283 as c13, d2284 as c14, d1804 as c15 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1877 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1877;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["Package"]:c4(),["PackageStatusUpdate"]:c5(),["PackageStatusUpdateResult"]:c6(),["PricingAmounts"]:c7(),["ReturnShipmentLineItemAllocation"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec246"]:c10(),["SharedCodec26"]:c11(),["SharedCodec7"]:c12(),["ShippingDimensions"]:c13(),["ShippingWeight"]:c14(),["SignedMoney"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageStatusUpdateResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d42 as c0, d792 as c1, d802 as c2, d74 as c3, d766 as c4, d1993 as c5, d2230 as c6, d2280 as c7, d801 as c8, d96 as c9, d43 as c10, d765 as c11, d2283 as c12, d2284 as c13, d1804 as c14, d2485 as c15 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2485 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2485;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["Package"]:c4(),["PricingAmounts"]:c5(),["ReturnShipmentLineItemAllocation"]:c6(),["SettlementAmounts"]:c7(),["SharedCodec246"]:c8(),["SharedCodec26"]:c9(),["SharedCodec7"]:c10(),["Shipment"]:c11(),["ShippingDimensions"]:c12(),["ShippingWeight"]:c13(),["SignedMoney"]:c14(),["VoidShipmentResult"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidShipmentResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

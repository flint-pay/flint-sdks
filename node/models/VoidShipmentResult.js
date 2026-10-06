import { d45 as c0, d800 as c1, d810 as c2, d77 as c3, d773 as c4, d2008 as c5, d2243 as c6, d2294 as c7, d809 as c8, d99 as c9, d46 as c10, d772 as c11, d2297 as c12, d2298 as c13, d223 as c14, d2500 as c15 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2500 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2500;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["Package"]:c4(),["PricingAmounts"]:c5(),["ReturnShipmentLineItemAllocation"]:c6(),["SettlementAmounts"]:c7(),["SharedCodec253"]:c8(),["SharedCodec27"]:c9(),["SharedCodec8"]:c10(),["Shipment"]:c11(),["ShippingDimensions"]:c12(),["ShippingWeight"]:c13(),["SignedMoney"]:c14(),["VoidShipmentResult"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidShipmentResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

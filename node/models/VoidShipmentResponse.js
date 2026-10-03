import { d42 as c0, d792 as c1, d802 as c2, d74 as c3, d1784 as c4, d1783 as c5, d766 as c6, d1994 as c7, d2119 as c8, d2120 as c9, d2231 as c10, d2281 as c11, d801 as c12, d96 as c13, d43 as c14, d765 as c15, d2284 as c16, d2285 as c17, d1804 as c18, d2485 as c19, d2486 as c20 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2485 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2485;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PricingAmounts"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec246"]:c12(),["SharedCodec26"]:c13(),["SharedCodec7"]:c14(),["Shipment"]:c15(),["ShippingDimensions"]:c16(),["ShippingWeight"]:c17(),["SignedMoney"]:c18(),["VoidShipmentResponse"]:c19(),["VoidShipmentResult"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

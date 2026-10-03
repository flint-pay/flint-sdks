import { d42 as c0, d794 as c1, d804 as c2, d74 as c3, d1786 as c4, d1785 as c5, d768 as c6, d1996 as c7, d2121 as c8, d2122 as c9, d2233 as c10, d2283 as c11, d803 as c12, d96 as c13, d43 as c14, d767 as c15, d2286 as c16, d2287 as c17, d1806 as c18, d2487 as c19, d2488 as c20 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2487 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2487;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PricingAmounts"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec246"]:c12(),["SharedCodec26"]:c13(),["SharedCodec7"]:c14(),["Shipment"]:c15(),["ShippingDimensions"]:c16(),["ShippingWeight"]:c17(),["SignedMoney"]:c18(),["VoidShipmentResponse"]:c19(),["VoidShipmentResult"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

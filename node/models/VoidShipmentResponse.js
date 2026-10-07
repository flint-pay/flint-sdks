import { d42 as c0, d762 as c1, d772 as c2, d314 as c3, d1775 as c4, d1776 as c5, d735 as c6, d1992 as c7, d2112 as c8, d2113 as c9, d2223 as c10, d2274 as c11, d14 as c12, d92 as c13, d771 as c14, d1774 as c15, d43 as c16, d734 as c17, d2277 as c18, d2278 as c19, d1970 as c20, d2477 as c21, d2478 as c22 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2477 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2477;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PricingAmounts"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec1"]:c12(),["SharedCodec17"]:c13(),["SharedCodec218"]:c14(),["SharedCodec448"]:c15(),["SharedCodec5"]:c16(),["Shipment"]:c17(),["ShippingDimensions"]:c18(),["ShippingWeight"]:c19(),["SignedMoney"]:c20(),["VoidShipmentResponse"]:c21(),["VoidShipmentResult"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

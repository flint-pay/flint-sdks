import { d42 as c0, d783 as c1, d793 as c2, d323 as c3, d1820 as c4, d1821 as c5, d756 as c6, d2039 as c7, d2162 as c8, d2163 as c9, d2273 as c10, d2324 as c11, d14 as c12, d92 as c13, d792 as c14, d1819 as c15, d43 as c16, d755 as c17, d2327 as c18, d2328 as c19, d2017 as c20, d2567 as c21, d2568 as c22 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2567 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2567;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PricingAmounts"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec1"]:c12(),["SharedCodec17"]:c13(),["SharedCodec227"]:c14(),["SharedCodec466"]:c15(),["SharedCodec5"]:c16(),["Shipment"]:c17(),["ShippingDimensions"]:c18(),["ShippingWeight"]:c19(),["SignedMoney"]:c20(),["VoidShipmentResponse"]:c21(),["VoidShipmentResult"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d45 as c0, d812 as c1, d822 as c2, d77 as c3, d1824 as c4, d1823 as c5, d785 as c6, d2035 as c7, d2158 as c8, d2159 as c9, d2270 as c10, d2321 as c11, d14 as c12, d821 as c13, d99 as c14, d1822 as c15, d46 as c16, d784 as c17, d2324 as c18, d2325 as c19, d226 as c20, d2526 as c21, d2527 as c22 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2526 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2526;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PricingAmounts"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec1"]:c12(),["SharedCodec254"]:c13(),["SharedCodec27"]:c14(),["SharedCodec488"]:c15(),["SharedCodec8"]:c16(),["Shipment"]:c17(),["ShippingDimensions"]:c18(),["ShippingWeight"]:c19(),["SignedMoney"]:c20(),["VoidShipmentResponse"]:c21(),["VoidShipmentResult"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

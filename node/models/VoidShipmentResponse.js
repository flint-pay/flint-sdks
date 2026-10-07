import { d45 as c0, d819 as c1, d829 as c2, d77 as c3, d1830 as c4, d1829 as c5, d792 as c6, d2041 as c7, d2164 as c8, d2165 as c9, d2276 as c10, d2327 as c11, d14 as c12, d828 as c13, d104 as c14, d1828 as c15, d46 as c16, d791 as c17, d2330 as c18, d2331 as c19, d227 as c20, d2532 as c21, d2533 as c22 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2532 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2532;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PricingAmounts"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec1"]:c12(),["SharedCodec258"]:c13(),["SharedCodec29"]:c14(),["SharedCodec492"]:c15(),["SharedCodec8"]:c16(),["Shipment"]:c17(),["ShippingDimensions"]:c18(),["ShippingWeight"]:c19(),["SignedMoney"]:c20(),["VoidShipmentResponse"]:c21(),["VoidShipmentResult"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

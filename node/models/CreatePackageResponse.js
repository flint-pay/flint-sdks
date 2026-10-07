import { d438 as c0, d439 as c1, d45 as c2, d819 as c3, d829 as c4, d77 as c5, d1830 as c6, d1829 as c7, d792 as c8, d2041 as c9, d2164 as c10, d2165 as c11, d2276 as c12, d2327 as c13, d14 as c14, d828 as c15, d104 as c16, d1828 as c17, d46 as c18, d2330 as c19, d2331 as c20, d227 as c21 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d438 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d438;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageResponse"]:c0(),["CreatePackageResult"]:c1(),["ExpandedOrderSummary"]:c2(),["FulfillmentEvent"]:c3(),["FulfillmentNotification"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["Package"]:c8(),["PricingAmounts"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["ReturnShipmentLineItemAllocation"]:c12(),["SettlementAmounts"]:c13(),["SharedCodec1"]:c14(),["SharedCodec258"]:c15(),["SharedCodec29"]:c16(),["SharedCodec492"]:c17(),["SharedCodec8"]:c18(),["ShippingDimensions"]:c19(),["ShippingWeight"]:c20(),["SignedMoney"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePackageResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

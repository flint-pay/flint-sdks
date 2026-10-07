import { d45 as c0, d819 as c1, d829 as c2, d77 as c3, d1830 as c4, d1829 as c5, d792 as c6, d1922 as c7, d1923 as c8, d1924 as c9, d2041 as c10, d2164 as c11, d2165 as c12, d2276 as c13, d2327 as c14, d14 as c15, d828 as c16, d104 as c17, d1828 as c18, d46 as c19, d2330 as c20, d2331 as c21, d227 as c22 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1923 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1923;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PackageStatusUpdate"]:c7(),["PackageStatusUpdateResponse"]:c8(),["PackageStatusUpdateResult"]:c9(),["PricingAmounts"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["ReturnShipmentLineItemAllocation"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec1"]:c15(),["SharedCodec258"]:c16(),["SharedCodec29"]:c17(),["SharedCodec492"]:c18(),["SharedCodec8"]:c19(),["ShippingDimensions"]:c20(),["ShippingWeight"]:c21(),["SignedMoney"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageStatusUpdateResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

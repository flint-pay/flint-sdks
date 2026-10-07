import { d45 as c0, d819 as c1, d829 as c2, d77 as c3, d792 as c4, d1922 as c5, d1924 as c6, d2041 as c7, d2276 as c8, d2327 as c9, d828 as c10, d104 as c11, d46 as c12, d2330 as c13, d2331 as c14, d227 as c15 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1924 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1924;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["Package"]:c4(),["PackageStatusUpdate"]:c5(),["PackageStatusUpdateResult"]:c6(),["PricingAmounts"]:c7(),["ReturnShipmentLineItemAllocation"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec258"]:c10(),["SharedCodec29"]:c11(),["SharedCodec8"]:c12(),["ShippingDimensions"]:c13(),["ShippingWeight"]:c14(),["SignedMoney"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageStatusUpdateResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

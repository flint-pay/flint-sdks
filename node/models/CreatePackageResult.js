import { d439 as c0, d45 as c1, d819 as c2, d829 as c3, d77 as c4, d792 as c5, d2041 as c6, d2276 as c7, d2327 as c8, d828 as c9, d104 as c10, d46 as c11, d2330 as c12, d2331 as c13, d227 as c14 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d439 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d439;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageResult"]:c0(),["ExpandedOrderSummary"]:c1(),["FulfillmentEvent"]:c2(),["FulfillmentNotification"]:c3(),["MoneyValue"]:c4(),["Package"]:c5(),["PricingAmounts"]:c6(),["ReturnShipmentLineItemAllocation"]:c7(),["SettlementAmounts"]:c8(),["SharedCodec258"]:c9(),["SharedCodec29"]:c10(),["SharedCodec8"]:c11(),["ShippingDimensions"]:c12(),["ShippingWeight"]:c13(),["SignedMoney"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePackageResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

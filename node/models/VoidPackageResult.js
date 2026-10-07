import { d45 as c0, d819 as c1, d829 as c2, d77 as c3, d792 as c4, d2041 as c5, d2276 as c6, d2327 as c7, d828 as c8, d104 as c9, d46 as c10, d2330 as c11, d2331 as c12, d227 as c13, d2530 as c14 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2530 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2530;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["Package"]:c4(),["PricingAmounts"]:c5(),["ReturnShipmentLineItemAllocation"]:c6(),["SettlementAmounts"]:c7(),["SharedCodec258"]:c8(),["SharedCodec29"]:c9(),["SharedCodec8"]:c10(),["ShippingDimensions"]:c11(),["ShippingWeight"]:c12(),["SignedMoney"]:c13(),["VoidPackageResult"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidPackageResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

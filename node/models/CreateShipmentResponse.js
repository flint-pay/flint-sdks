import { d517 as c0, d518 as c1, d45 as c2, d77 as c3, d1830 as c4, d1829 as c5, d2041 as c6, d2164 as c7, d2165 as c8, d2276 as c9, d2327 as c10, d14 as c11, d104 as c12, d1828 as c13, d791 as c14, d227 as c15 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d517 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d517;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateShipmentResponse"]:c0(),["CreateShipmentResult"]:c1(),["ExpandedOrderSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["ReturnShipmentLineItemAllocation"]:c9(),["SettlementAmounts"]:c10(),["SharedCodec1"]:c11(),["SharedCodec29"]:c12(),["SharedCodec492"]:c13(),["Shipment"]:c14(),["SignedMoney"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

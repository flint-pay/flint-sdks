import { d1602 as c0, d1621 as c1, d1625 as c2, d1638 as c3, d1640 as c4, d1641 as c5, d1642 as c6, d115 as c7, d77 as c8, d1830 as c9, d1829 as c10, d2151 as c11, d2164 as c12, d2165 as c13, d14 as c14, d1828 as c15 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1642 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1642;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0(),["InventoryItem"]:c1(),["InventoryLevel"]:c2(),["InventoryReservation"]:c3(),["InventoryReservationOwner"]:c4(),["InventoryReservationResult"]:c5(),["InventoryReservationResultResponse"]:c6(),["InventoryRoutingSource"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ReservationLine"]:c11(),["ResponseMeta"]:c12(),["ResponseWarning"]:c13(),["SharedCodec1"]:c14(),["SharedCodec492"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

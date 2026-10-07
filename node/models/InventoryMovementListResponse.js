import { d1621 as c0, d1625 as c1, d1629 as c2, d1630 as c3, d1649 as c4, d258 as c5, d77 as c6, d1830 as c7, d1829 as c8, d2164 as c9, d2165 as c10, d14 as c11, d1828 as c12, d259 as c13 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1630 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1630;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryMovement"]:c2(),["InventoryMovementListResponse"]:c3(),["InventorySourceReference"]:c4(),["InventorySourceSystem"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec492"]:c12(),["SharedCodec65"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryMovementListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1632 as c0, d1633 as c1, d1635 as c2, d258 as c3, d77 as c4, d1830 as c5, d1829 as c6, d2164 as c7, d2165 as c8, d14 as c9, d1828 as c10, d259 as c11 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1635 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1635;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReceipt"]:c0(),["InventoryReceiptLine"]:c1(),["InventoryReceiptListResponse"]:c2(),["InventorySourceSystem"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec492"]:c10(),["SharedCodec65"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReceiptListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

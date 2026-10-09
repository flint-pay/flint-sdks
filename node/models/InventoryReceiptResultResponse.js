import { d1601 as c0, d1605 as c1, d1612 as c2, d1613 as c3, d1616 as c4, d1617 as c5, d228 as c6, d323 as c7, d1820 as c8, d1821 as c9, d2162 as c10, d2163 as c11, d14 as c12, d229 as c13, d1819 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1617 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1617;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryReceipt"]:c2(),["InventoryReceiptLine"]:c3(),["InventoryReceiptResult"]:c4(),["InventoryReceiptResultResponse"]:c5(),["InventorySourceSystem"]:c6(),["MoneyValue"]:c7(),["NextAction"]:c8(),["NextActionMerchantAccountSession"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["SharedCodec1"]:c12(),["SharedCodec42"]:c13(),["SharedCodec466"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReceiptResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

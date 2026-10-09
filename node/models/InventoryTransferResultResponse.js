import { d1601 as c0, d1605 as c1, d1633 as c2, d1643 as c3, d1648 as c4, d1649 as c5, d323 as c6, d1820 as c7, d1821 as c8, d2162 as c9, d2163 as c10, d14 as c11, d1819 as c12 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1649 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1649;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryTransfer"]:c2(),["InventoryTransferLine"]:c3(),["InventoryTransferResult"]:c4(),["InventoryTransferResultResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec466"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

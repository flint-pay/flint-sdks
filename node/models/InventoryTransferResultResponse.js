import { d1614 as c0, d1618 as c1, d1644 as c2, d1654 as c3, d1659 as c4, d1660 as c5, d77 as c6, d1823 as c7, d1822 as c8, d2157 as c9, d2158 as c10, d14 as c11, d1821 as c12 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1660 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1660;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryTransfer"]:c2(),["InventoryTransferLine"]:c3(),["InventoryTransferResult"]:c4(),["InventoryTransferResultResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec487"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

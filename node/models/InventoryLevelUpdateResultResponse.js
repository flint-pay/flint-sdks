import { d1614 as c0, d1618 as c1, d1620 as c2, d1621 as c3, d77 as c4, d1823 as c5, d1822 as c6, d2157 as c7, d2158 as c8, d14 as c9, d1821 as c10 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1621 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1621;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryLevelUpdateResult"]:c2(),["InventoryLevelUpdateResultResponse"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec487"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryLevelUpdateResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

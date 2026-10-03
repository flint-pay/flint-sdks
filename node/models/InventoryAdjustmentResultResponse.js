import { d8 as c0, d1565 as c1, d1568 as c2, d1569 as c3, d1583 as c4, d1587 as c5, d249 as c6, d74 as c7, d1784 as c8, d1783 as c9, d2118 as c10, d2119 as c11, d250 as c12 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1569 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1569;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AdjustmentLine"]:c0(),["InventoryAdjustment"]:c1(),["InventoryAdjustmentResult"]:c2(),["InventoryAdjustmentResultResponse"]:c3(),["InventoryItem"]:c4(),["InventoryLevel"]:c5(),["InventorySourceSystem"]:c6(),["MoneyValue"]:c7(),["NextAction"]:c8(),["NextActionMerchantAccountSession"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["SharedCodec64"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

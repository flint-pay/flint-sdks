import { d251 as c0, d1575 as c1, d1576 as c2, d1580 as c3, d1581 as c4, d1583 as c5, d1587 as c6, d249 as c7, d74 as c8, d1784 as c9, d1783 as c10, d2118 as c11, d2119 as c12, d250 as c13 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1581 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1581;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountProvenance"]:c0(),["InventoryCount"]:c1(),["InventoryCountLine"]:c2(),["InventoryCountResult"]:c3(),["InventoryCountResultResponse"]:c4(),["InventoryItem"]:c5(),["InventoryLevel"]:c6(),["InventorySourceSystem"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["SharedCodec64"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d221 as c0, d1548 as c1, d1549 as c2, d1553 as c3, d1554 as c4, d1556 as c5, d1560 as c6, d219 as c7, d314 as c8, d1775 as c9, d1776 as c10, d2112 as c11, d2113 as c12, d14 as c13, d220 as c14, d1774 as c15 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1554 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1554;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountProvenance"]:c0(),["InventoryCount"]:c1(),["InventoryCountLine"]:c2(),["InventoryCountResult"]:c3(),["InventoryCountResultResponse"]:c4(),["InventoryItem"]:c5(),["InventoryLevel"]:c6(),["InventorySourceSystem"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["SharedCodec1"]:c13(),["SharedCodec40"]:c14(),["SharedCodec448"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

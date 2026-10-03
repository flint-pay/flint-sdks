import { d1583 as c0, d1587 as c1, d1589 as c2, d1590 as c3, d74 as c4, d1784 as c5, d1783 as c6, d2118 as c7, d2119 as c8 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1590 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1590;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryLevelUpdateResult"]:c2(),["InventoryLevelUpdateResultResponse"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryLevelUpdateResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

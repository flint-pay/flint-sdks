import { d1583 as c0, d1587 as c1, d1591 as c2, d1592 as c3, d1611 as c4, d249 as c5, d74 as c6, d1784 as c7, d1783 as c8, d2118 as c9, d2119 as c10, d250 as c11 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1592 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1592;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryMovement"]:c2(),["InventoryMovementListResponse"]:c3(),["InventorySourceReference"]:c4(),["InventorySourceSystem"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec64"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryMovementListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

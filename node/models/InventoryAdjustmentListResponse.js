import { d10 as c0, d1583 as c1, d1585 as c2, d228 as c3, d323 as c4, d1820 as c5, d1821 as c6, d2162 as c7, d2163 as c8, d14 as c9, d229 as c10, d1819 as c11 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1585 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1585;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AdjustmentLine"]:c0(),["InventoryAdjustment"]:c1(),["InventoryAdjustmentListResponse"]:c2(),["InventorySourceSystem"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec42"]:c10(),["SharedCodec466"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

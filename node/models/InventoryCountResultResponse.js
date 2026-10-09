import { d230 as c0, d1593 as c1, d1594 as c2, d1598 as c3, d1599 as c4, d1601 as c5, d1605 as c6, d228 as c7, d323 as c8, d1820 as c9, d1821 as c10, d2162 as c11, d2163 as c12, d14 as c13, d229 as c14, d1819 as c15 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1599 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1599;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountProvenance"]:c0(),["InventoryCount"]:c1(),["InventoryCountLine"]:c2(),["InventoryCountResult"]:c3(),["InventoryCountResultResponse"]:c4(),["InventoryItem"]:c5(),["InventoryLevel"]:c6(),["InventorySourceSystem"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["SharedCodec1"]:c13(),["SharedCodec42"]:c14(),["SharedCodec466"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

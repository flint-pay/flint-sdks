import { d1570 as c0, d1571 as c1, d1573 as c2, d74 as c3, d1784 as c4, d1783 as c5, d1992 as c6, d2119 as c7, d2120 as c8 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1573 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1573;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAllocationPolicy"]:c0(),["InventoryAllocationPolicyConfiguration"]:c1(),["InventoryAllocationPolicyResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PolicyLocation"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAllocationPolicyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

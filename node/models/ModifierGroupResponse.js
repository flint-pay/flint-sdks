import { d1768 as c0, d1769 as c1, d1771 as c2, d74 as c3, d1784 as c4, d1783 as c5, d2118 as c6, d2119 as c7, d2337 as c8 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1771 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1771;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierGroupResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["TextModifierConfig"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierGroupResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

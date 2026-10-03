import { d1768 as c0, d1769 as c1, d1772 as c2, d57 as c3, d1775 as c4, d1778 as c5, d74 as c6, d1784 as c7, d1783 as c8, d2118 as c9, d2119 as c10, d397 as c11, d1774 as c12, d2337 as c13 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1778 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1778;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierOverride"]:c2(),["ModifierSet"]:c3(),["ModifierSetGroup"]:c4(),["ModifierSetResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec145"]:c11(),["SharedCodec478"]:c12(),["TextModifierConfig"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1768 as c0, d1769 as c1, d1772 as c2, d57 as c3, d1775 as c4, d74 as c5, d397 as c6, d1774 as c7, d2337 as c8 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d57 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d57;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierOverride"]:c2(),["ModifierSet"]:c3(),["ModifierSetGroup"]:c4(),["MoneyValue"]:c5(),["SharedCodec145"]:c6(),["SharedCodec478"]:c7(),["TextModifierConfig"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSet(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1768 as c0, d1769 as c1, d1772 as c2, d1775 as c3, d74 as c4, d397 as c5, d1774 as c6, d2337 as c7 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1775 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1775;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierOverride"]:c2(),["ModifierSetGroup"]:c3(),["MoneyValue"]:c4(),["SharedCodec145"]:c5(),["SharedCodec478"]:c6(),["TextModifierConfig"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

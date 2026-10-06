import { d1806 as c0, d1807 as c1, d1810 as c2, d60 as c3, d1813 as c4, d77 as c5, d408 as c6, d1812 as c7, d2378 as c8 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d60 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d60;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierOverride"]:c2(),["ModifierSet"]:c3(),["ModifierSetGroup"]:c4(),["MoneyValue"]:c5(),["SharedCodec148"]:c6(),["SharedCodec486"]:c7(),["TextModifierConfig"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSet(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

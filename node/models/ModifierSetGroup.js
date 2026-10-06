import { d1806 as c0, d1807 as c1, d1810 as c2, d1813 as c3, d77 as c4, d408 as c5, d1812 as c6, d2378 as c7 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1813 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1813;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierOverride"]:c2(),["ModifierSetGroup"]:c3(),["MoneyValue"]:c4(),["SharedCodec148"]:c5(),["SharedCodec486"]:c6(),["TextModifierConfig"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d1806 as c0, d1807 as c1, d77 as c2, d2378 as c3 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1807 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1807;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["MoneyValue"]:c2(),["TextModifierConfig"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

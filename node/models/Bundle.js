import { d62 as c0, d64 as c1, d176 as c2, d926 as c3, d1806 as c4, d1807 as c5, d1810 as c6, d60 as c7, d1813 as c8, d77 as c9, d2312 as c10, d408 as c11, d61 as c12, d63 as c13, d1812 as c14, d2378 as c15 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d62 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d62;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Bundle"]:c0(),["BundleComponent"]:c1(),["CategoryReference"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec148"]:c11(),["SharedCodec16"]:c12(),["SharedCodec17"]:c13(),["SharedCodec486"]:c14(),["TextModifierConfig"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

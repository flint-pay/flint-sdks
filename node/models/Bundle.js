import { d59 as c0, d61 as c1, d169 as c2, d905 as c3, d1768 as c4, d1769 as c5, d1772 as c6, d57 as c7, d1775 as c8, d74 as c9, d2273 as c10, d397 as c11, d58 as c12, d60 as c13, d1774 as c14, d2338 as c15 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d59 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d59;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Bundle"]:c0(),["BundleComponent"]:c1(),["CategoryReference"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec145"]:c11(),["SharedCodec15"]:c12(),["SharedCodec16"]:c13(),["SharedCodec478"]:c14(),["TextModifierConfig"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

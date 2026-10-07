import { d62 as c0, d64 as c1, d180 as c2, d932 as c3, d1813 as c4, d1814 as c5, d1817 as c6, d60 as c7, d1820 as c8, d77 as c9, d2319 as c10, d409 as c11, d61 as c12, d63 as c13, d1819 as c14, d2385 as c15 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d62 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d62;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Bundle"]:c0(),["BundleComponent"]:c1(),["CategoryReference"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec148"]:c11(),["SharedCodec16"]:c12(),["SharedCodec17"]:c13(),["SharedCodec491"]:c14(),["TextModifierConfig"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

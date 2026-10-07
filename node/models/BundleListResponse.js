import { d62 as c0, d64 as c1, d67 as c2, d180 as c3, d932 as c4, d1813 as c5, d1814 as c6, d1817 as c7, d60 as c8, d1820 as c9, d77 as c10, d1830 as c11, d1829 as c12, d2164 as c13, d2165 as c14, d2319 as c15, d14 as c16, d409 as c17, d61 as c18, d63 as c19, d1819 as c20, d1828 as c21, d2385 as c22 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d67 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d67;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Bundle"]:c0(),["BundleComponent"]:c1(),["BundleListResponse"]:c2(),["CategoryReference"]:c3(),["Image"]:c4(),["Modifier"]:c5(),["ModifierGroup"]:c6(),["ModifierOverride"]:c7(),["ModifierSet"]:c8(),["ModifierSetGroup"]:c9(),["MoneyValue"]:c10(),["NextAction"]:c11(),["NextActionMerchantAccountSession"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec1"]:c16(),["SharedCodec148"]:c17(),["SharedCodec16"]:c18(),["SharedCodec17"]:c19(),["SharedCodec491"]:c20(),["SharedCodec492"]:c21(),["TextModifierConfig"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundleListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

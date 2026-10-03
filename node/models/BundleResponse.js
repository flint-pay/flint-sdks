import { d59 as c0, d61 as c1, d65 as c2, d169 as c3, d905 as c4, d1768 as c5, d1769 as c6, d1772 as c7, d57 as c8, d1775 as c9, d74 as c10, d1784 as c11, d1783 as c12, d2119 as c13, d2120 as c14, d2273 as c15, d397 as c16, d58 as c17, d60 as c18, d1774 as c19, d2338 as c20 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d65 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d65;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Bundle"]:c0(),["BundleComponent"]:c1(),["BundleResponse"]:c2(),["CategoryReference"]:c3(),["Image"]:c4(),["Modifier"]:c5(),["ModifierGroup"]:c6(),["ModifierOverride"]:c7(),["ModifierSet"]:c8(),["ModifierSetGroup"]:c9(),["MoneyValue"]:c10(),["NextAction"]:c11(),["NextActionMerchantAccountSession"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec145"]:c16(),["SharedCodec15"]:c17(),["SharedCodec16"]:c18(),["SharedCodec478"]:c19(),["TextModifierConfig"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundleResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

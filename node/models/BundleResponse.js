import { d62 as c0, d64 as c1, d68 as c2, d176 as c3, d926 as c4, d1806 as c5, d1807 as c6, d1810 as c7, d60 as c8, d1813 as c9, d77 as c10, d1823 as c11, d1822 as c12, d2157 as c13, d2158 as c14, d2312 as c15, d14 as c16, d408 as c17, d61 as c18, d63 as c19, d1812 as c20, d1821 as c21, d2378 as c22 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d68 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d68;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Bundle"]:c0(),["BundleComponent"]:c1(),["BundleResponse"]:c2(),["CategoryReference"]:c3(),["Image"]:c4(),["Modifier"]:c5(),["ModifierGroup"]:c6(),["ModifierOverride"]:c7(),["ModifierSet"]:c8(),["ModifierSetGroup"]:c9(),["MoneyValue"]:c10(),["NextAction"]:c11(),["NextActionMerchantAccountSession"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec1"]:c16(),["SharedCodec148"]:c17(),["SharedCodec16"]:c18(),["SharedCodec17"]:c19(),["SharedCodec486"]:c20(),["SharedCodec487"]:c21(),["TextModifierConfig"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundleResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

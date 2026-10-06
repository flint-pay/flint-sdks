import { d176 as c0, d881 as c1, d904 as c2, d926 as c3, d1806 as c4, d1807 as c5, d1810 as c6, d60 as c7, d1813 as c8, d77 as c9, d2041 as c10, d2043 as c11, d2046 as c12, d2312 as c13, d408 as c14, d412 as c15, d61 as c16, d1812 as c17, d2038 as c18, d2039 as c19, d2040 as c20, d2378 as c21 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2041 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2041;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["Product"]:c10(),["ProductOption"]:c11(),["ProductOptionValue"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec148"]:c14(),["SharedCodec149"]:c15(),["SharedCodec16"]:c16(),["SharedCodec486"]:c17(),["SharedCodec528"]:c18(),["SharedCodec529"]:c19(),["SharedCodec530"]:c20(),["TextModifierConfig"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProduct(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

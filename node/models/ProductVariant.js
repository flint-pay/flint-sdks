import { d881 as c0, d904 as c1, d926 as c2, d1806 as c3, d1807 as c4, d1810 as c5, d60 as c6, d1813 as c7, d77 as c8, d2049 as c9, d2312 as c10, d408 as c11, d412 as c12, d61 as c13, d1812 as c14, d2378 as c15 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2049 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2049;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["Image"]:c2(),["Modifier"]:c3(),["ModifierGroup"]:c4(),["ModifierOverride"]:c5(),["ModifierSet"]:c6(),["ModifierSetGroup"]:c7(),["MoneyValue"]:c8(),["ProductVariant"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec148"]:c11(),["SharedCodec149"]:c12(),["SharedCodec16"]:c13(),["SharedCodec486"]:c14(),["TextModifierConfig"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

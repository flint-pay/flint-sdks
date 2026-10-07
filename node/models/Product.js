import { d180 as c0, d887 as c1, d910 as c2, d932 as c3, d1813 as c4, d1814 as c5, d1817 as c6, d60 as c7, d1820 as c8, d77 as c9, d2048 as c10, d2050 as c11, d2053 as c12, d2319 as c13, d409 as c14, d413 as c15, d61 as c16, d1819 as c17, d2045 as c18, d2046 as c19, d2047 as c20, d2385 as c21 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2048 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2048;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["Product"]:c10(),["ProductOption"]:c11(),["ProductOptionValue"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec148"]:c14(),["SharedCodec149"]:c15(),["SharedCodec16"]:c16(),["SharedCodec491"]:c17(),["SharedCodec533"]:c18(),["SharedCodec534"]:c19(),["SharedCodec535"]:c20(),["TextModifierConfig"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProduct(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

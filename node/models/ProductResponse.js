import { d180 as c0, d887 as c1, d910 as c2, d932 as c3, d1813 as c4, d1814 as c5, d1817 as c6, d60 as c7, d1820 as c8, d77 as c9, d1830 as c10, d1829 as c11, d2048 as c12, d2050 as c13, d2053 as c14, d2055 as c15, d2164 as c16, d2165 as c17, d2319 as c18, d14 as c19, d409 as c20, d413 as c21, d61 as c22, d1819 as c23, d1828 as c24, d2045 as c25, d2046 as c26, d2047 as c27, d2385 as c28 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2055 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2055;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["NextAction"]:c10(),["NextActionMerchantAccountSession"]:c11(),["Product"]:c12(),["ProductOption"]:c13(),["ProductOptionValue"]:c14(),["ProductResponse"]:c15(),["ResponseMeta"]:c16(),["ResponseWarning"]:c17(),["SelectedProductOption"]:c18(),["SharedCodec1"]:c19(),["SharedCodec148"]:c20(),["SharedCodec149"]:c21(),["SharedCodec16"]:c22(),["SharedCodec491"]:c23(),["SharedCodec492"]:c24(),["SharedCodec533"]:c25(),["SharedCodec534"]:c26(),["SharedCodec535"]:c27(),["TextModifierConfig"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

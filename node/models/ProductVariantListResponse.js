import { d887 as c0, d910 as c1, d932 as c2, d1813 as c3, d1814 as c4, d1817 as c5, d60 as c6, d1820 as c7, d77 as c8, d1830 as c9, d1829 as c10, d2056 as c11, d2057 as c12, d2164 as c13, d2165 as c14, d2319 as c15, d14 as c16, d409 as c17, d413 as c18, d61 as c19, d1819 as c20, d1828 as c21, d2385 as c22 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2057 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2057;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["Image"]:c2(),["Modifier"]:c3(),["ModifierGroup"]:c4(),["ModifierOverride"]:c5(),["ModifierSet"]:c6(),["ModifierSetGroup"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ProductVariant"]:c11(),["ProductVariantListResponse"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec1"]:c16(),["SharedCodec148"]:c17(),["SharedCodec149"]:c18(),["SharedCodec16"]:c19(),["SharedCodec491"]:c20(),["SharedCodec492"]:c21(),["TextModifierConfig"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

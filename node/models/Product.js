import { d136 as c0, d849 as c1, d866 as c2, d889 as c3, d1804 as c4, d1805 as c5, d1808 as c6, d56 as c7, d1811 as c8, d323 as c9, d2043 as c10, d2045 as c11, d2048 as c12, d2049 as c13, d2051 as c14, d2053 as c15, d2318 as c16, d365 as c17, d57 as c18, d848 as c19, d1810 as c20, d2413 as c21 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2043 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2043;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["Product"]:c10(),["ProductOption"]:c11(),["ProductOptionValue"]:c12(),["ProductPriceRange"]:c13(),["ProductVariant"]:c14(),["ProductVariantMatch"]:c15(),["SelectedProductOption"]:c16(),["SharedCodec113"]:c17(),["SharedCodec12"]:c18(),["SharedCodec243"]:c19(),["SharedCodec465"]:c20(),["TextModifierConfig"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProduct(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

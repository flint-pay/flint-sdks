import { d135 as c0, d828 as c1, d845 as c2, d868 as c3, d1759 as c4, d1760 as c5, d1763 as c6, d56 as c7, d1766 as c8, d314 as c9, d1996 as c10, d1998 as c11, d2001 as c12, d2002 as c13, d2004 as c14, d2006 as c15, d2268 as c16, d355 as c17, d57 as c18, d827 as c19, d1765 as c20, d2329 as c21 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1996 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1996;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["Product"]:c10(),["ProductOption"]:c11(),["ProductOptionValue"]:c12(),["ProductPriceRange"]:c13(),["ProductVariant"]:c14(),["ProductVariantMatch"]:c15(),["SelectedProductOption"]:c16(),["SharedCodec111"]:c17(),["SharedCodec12"]:c18(),["SharedCodec234"]:c19(),["SharedCodec447"]:c20(),["TextModifierConfig"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProduct(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

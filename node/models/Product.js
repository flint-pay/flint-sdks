import { d169 as c0, d861 as c1, d883 as c2, d905 as c3, d1768 as c4, d1769 as c5, d1772 as c6, d57 as c7, d1775 as c8, d74 as c9, d2001 as c10, d2003 as c11, d2006 as c12, d2273 as c13, d397 as c14, d401 as c15, d58 as c16, d1774 as c17, d1998 as c18, d1999 as c19, d2000 as c20, d2338 as c21 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2001 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2001;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["Product"]:c10(),["ProductOption"]:c11(),["ProductOptionValue"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec145"]:c14(),["SharedCodec146"]:c15(),["SharedCodec15"]:c16(),["SharedCodec478"]:c17(),["SharedCodec516"]:c18(),["SharedCodec517"]:c19(),["SharedCodec518"]:c20(),["TextModifierConfig"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProduct(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

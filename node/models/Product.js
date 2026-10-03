import { d169 as c0, d861 as c1, d883 as c2, d905 as c3, d1768 as c4, d1769 as c5, d1772 as c6, d57 as c7, d1775 as c8, d74 as c9, d2000 as c10, d2002 as c11, d2005 as c12, d2272 as c13, d397 as c14, d401 as c15, d58 as c16, d1774 as c17, d1997 as c18, d1998 as c19, d1999 as c20, d2337 as c21 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2000 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2000;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["Product"]:c10(),["ProductOption"]:c11(),["ProductOptionValue"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec145"]:c14(),["SharedCodec146"]:c15(),["SharedCodec15"]:c16(),["SharedCodec478"]:c17(),["SharedCodec516"]:c18(),["SharedCodec517"]:c19(),["SharedCodec518"]:c20(),["TextModifierConfig"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProduct(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

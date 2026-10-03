import { d169 as c0, d861 as c1, d883 as c2, d905 as c3, d1768 as c4, d1769 as c5, d1772 as c6, d57 as c7, d1775 as c8, d74 as c9, d1784 as c10, d1783 as c11, d2001 as c12, d2003 as c13, d2006 as c14, d2008 as c15, d2119 as c16, d2120 as c17, d2273 as c18, d397 as c19, d401 as c20, d58 as c21, d1774 as c22, d1998 as c23, d1999 as c24, d2000 as c25, d2338 as c26 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2008 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2008;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["NextAction"]:c10(),["NextActionMerchantAccountSession"]:c11(),["Product"]:c12(),["ProductOption"]:c13(),["ProductOptionValue"]:c14(),["ProductResponse"]:c15(),["ResponseMeta"]:c16(),["ResponseWarning"]:c17(),["SelectedProductOption"]:c18(),["SharedCodec145"]:c19(),["SharedCodec146"]:c20(),["SharedCodec15"]:c21(),["SharedCodec478"]:c22(),["SharedCodec516"]:c23(),["SharedCodec517"]:c24(),["SharedCodec518"]:c25(),["TextModifierConfig"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

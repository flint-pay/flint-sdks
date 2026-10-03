import { d861 as c0, d883 as c1, d905 as c2, d1768 as c3, d1769 as c4, d1772 as c5, d57 as c6, d1775 as c7, d74 as c8, d1784 as c9, d1783 as c10, d2009 as c11, d2010 as c12, d2119 as c13, d2120 as c14, d2273 as c15, d397 as c16, d401 as c17, d58 as c18, d1774 as c19, d2338 as c20 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2010 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2010;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["Image"]:c2(),["Modifier"]:c3(),["ModifierGroup"]:c4(),["ModifierOverride"]:c5(),["ModifierSet"]:c6(),["ModifierSetGroup"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ProductVariant"]:c11(),["ProductVariantListResponse"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec145"]:c16(),["SharedCodec146"]:c17(),["SharedCodec15"]:c18(),["SharedCodec478"]:c19(),["TextModifierConfig"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

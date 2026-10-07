import { d828 as c0, d845 as c1, d868 as c2, d1759 as c3, d1760 as c4, d1763 as c5, d56 as c6, d1766 as c7, d314 as c8, d1775 as c9, d1776 as c10, d2004 as c11, d2005 as c12, d2112 as c13, d2113 as c14, d2268 as c15, d14 as c16, d355 as c17, d57 as c18, d827 as c19, d1765 as c20, d1774 as c21, d2329 as c22 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2005 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2005;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["Image"]:c2(),["Modifier"]:c3(),["ModifierGroup"]:c4(),["ModifierOverride"]:c5(),["ModifierSet"]:c6(),["ModifierSetGroup"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ProductVariant"]:c11(),["ProductVariantListResponse"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec1"]:c16(),["SharedCodec111"]:c17(),["SharedCodec12"]:c18(),["SharedCodec234"]:c19(),["SharedCodec447"]:c20(),["SharedCodec448"]:c21(),["TextModifierConfig"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

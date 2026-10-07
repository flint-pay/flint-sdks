import { d135 as c0, d828 as c1, d845 as c2, d868 as c3, d1759 as c4, d1760 as c5, d1763 as c6, d56 as c7, d1766 as c8, d314 as c9, d1775 as c10, d1776 as c11, d1996 as c12, d1998 as c13, d2001 as c14, d2002 as c15, d2003 as c16, d2004 as c17, d2006 as c18, d2112 as c19, d2113 as c20, d2268 as c21, d14 as c22, d355 as c23, d57 as c24, d827 as c25, d1765 as c26, d1774 as c27, d2329 as c28 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2003 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2003;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["NextAction"]:c10(),["NextActionMerchantAccountSession"]:c11(),["Product"]:c12(),["ProductOption"]:c13(),["ProductOptionValue"]:c14(),["ProductPriceRange"]:c15(),["ProductResponse"]:c16(),["ProductVariant"]:c17(),["ProductVariantMatch"]:c18(),["ResponseMeta"]:c19(),["ResponseWarning"]:c20(),["SelectedProductOption"]:c21(),["SharedCodec1"]:c22(),["SharedCodec111"]:c23(),["SharedCodec12"]:c24(),["SharedCodec234"]:c25(),["SharedCodec447"]:c26(),["SharedCodec448"]:c27(),["TextModifierConfig"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d136 as c0, d849 as c1, d866 as c2, d889 as c3, d1804 as c4, d1805 as c5, d1808 as c6, d56 as c7, d1811 as c8, d323 as c9, d1820 as c10, d1821 as c11, d2043 as c12, d2044 as c13, d2045 as c14, d2048 as c15, d2049 as c16, d2051 as c17, d2053 as c18, d2162 as c19, d2163 as c20, d2318 as c21, d14 as c22, d365 as c23, d57 as c24, d848 as c25, d1810 as c26, d1819 as c27, d2413 as c28 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2044 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2044;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["NextAction"]:c10(),["NextActionMerchantAccountSession"]:c11(),["Product"]:c12(),["ProductListResponse"]:c13(),["ProductOption"]:c14(),["ProductOptionValue"]:c15(),["ProductPriceRange"]:c16(),["ProductVariant"]:c17(),["ProductVariantMatch"]:c18(),["ResponseMeta"]:c19(),["ResponseWarning"]:c20(),["SelectedProductOption"]:c21(),["SharedCodec1"]:c22(),["SharedCodec113"]:c23(),["SharedCodec12"]:c24(),["SharedCodec243"]:c25(),["SharedCodec465"]:c26(),["SharedCodec466"]:c27(),["TextModifierConfig"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

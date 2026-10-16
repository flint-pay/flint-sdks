import { d136 as c0, d854 as c1, d871 as c2, d894 as c3, d1807 as c4, d1808 as c5, d1811 as c6, d56 as c7, d1814 as c8, d323 as c9, d1823 as c10, d1824 as c11, d2060 as c12, d2061 as c13, d2062 as c14, d2065 as c15, d2066 as c16, d2068 as c17, d2070 as c18, d2178 as c19, d2179 as c20, d2334 as c21, d14 as c22, d365 as c23, d57 as c24, d853 as c25, d1813 as c26, d1822 as c27, d2429 as c28 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2061 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2061;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["NextAction"]:c10(),["NextActionMerchantAccountSession"]:c11(),["Product"]:c12(),["ProductListResponse"]:c13(),["ProductOption"]:c14(),["ProductOptionValue"]:c15(),["ProductPriceRange"]:c16(),["ProductVariant"]:c17(),["ProductVariantMatch"]:c18(),["ResponseMeta"]:c19(),["ResponseWarning"]:c20(),["SelectedProductOption"]:c21(),["SharedCodec1"]:c22(),["SharedCodec113"]:c23(),["SharedCodec12"]:c24(),["SharedCodec247"]:c25(),["SharedCodec466"]:c26(),["SharedCodec467"]:c27(),["TextModifierConfig"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

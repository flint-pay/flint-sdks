import { d136 as c0, d854 as c1, d871 as c2, d894 as c3, d1807 as c4, d1808 as c5, d1811 as c6, d56 as c7, d1814 as c8, d323 as c9, d2060 as c10, d2062 as c11, d2065 as c12, d2066 as c13, d2068 as c14, d2070 as c15, d2334 as c16, d365 as c17, d57 as c18, d853 as c19, d1813 as c20, d2429 as c21 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2060 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2060;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["Product"]:c10(),["ProductOption"]:c11(),["ProductOptionValue"]:c12(),["ProductPriceRange"]:c13(),["ProductVariant"]:c14(),["ProductVariantMatch"]:c15(),["SelectedProductOption"]:c16(),["SharedCodec113"]:c17(),["SharedCodec12"]:c18(),["SharedCodec247"]:c19(),["SharedCodec466"]:c20(),["TextModifierConfig"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProduct(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d854 as c0, d871 as c1, d894 as c2, d1807 as c3, d1808 as c4, d1811 as c5, d56 as c6, d1814 as c7, d323 as c8, d1823 as c9, d1824 as c10, d2068 as c11, d2072 as c12, d2178 as c13, d2179 as c14, d2334 as c15, d14 as c16, d365 as c17, d57 as c18, d853 as c19, d1813 as c20, d1822 as c21, d2429 as c22 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2072 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2072;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["Image"]:c2(),["Modifier"]:c3(),["ModifierGroup"]:c4(),["ModifierOverride"]:c5(),["ModifierSet"]:c6(),["ModifierSetGroup"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ProductVariant"]:c11(),["ProductVariantResponse"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec1"]:c16(),["SharedCodec113"]:c17(),["SharedCodec12"]:c18(),["SharedCodec247"]:c19(),["SharedCodec466"]:c20(),["SharedCodec467"]:c21(),["TextModifierConfig"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

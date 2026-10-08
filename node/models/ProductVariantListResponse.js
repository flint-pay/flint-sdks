import { d849 as c0, d866 as c1, d889 as c2, d1804 as c3, d1805 as c4, d1808 as c5, d56 as c6, d1811 as c7, d323 as c8, d1820 as c9, d1821 as c10, d2051 as c11, d2052 as c12, d2162 as c13, d2163 as c14, d2318 as c15, d14 as c16, d365 as c17, d57 as c18, d848 as c19, d1810 as c20, d1819 as c21, d2413 as c22 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2052 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2052;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["Image"]:c2(),["Modifier"]:c3(),["ModifierGroup"]:c4(),["ModifierOverride"]:c5(),["ModifierSet"]:c6(),["ModifierSetGroup"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ProductVariant"]:c11(),["ProductVariantListResponse"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec1"]:c16(),["SharedCodec113"]:c17(),["SharedCodec12"]:c18(),["SharedCodec243"]:c19(),["SharedCodec465"]:c20(),["SharedCodec466"]:c21(),["TextModifierConfig"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

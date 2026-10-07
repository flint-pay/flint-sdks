import { d175 as c0, d881 as c1, d904 as c2, d926 as c3, d1807 as c4, d1808 as c5, d1811 as c6, d60 as c7, d1814 as c8, d77 as c9, d1824 as c10, d1823 as c11, d2042 as c12, d2043 as c13, d2044 as c14, d2047 as c15, d2158 as c16, d2159 as c17, d2313 as c18, d14 as c19, d408 as c20, d412 as c21, d61 as c22, d1813 as c23, d1822 as c24, d2039 as c25, d2040 as c26, d2041 as c27, d2379 as c28 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2043 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2043;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["NextAction"]:c10(),["NextActionMerchantAccountSession"]:c11(),["Product"]:c12(),["ProductListResponse"]:c13(),["ProductOption"]:c14(),["ProductOptionValue"]:c15(),["ResponseMeta"]:c16(),["ResponseWarning"]:c17(),["SelectedProductOption"]:c18(),["SharedCodec1"]:c19(),["SharedCodec148"]:c20(),["SharedCodec149"]:c21(),["SharedCodec16"]:c22(),["SharedCodec487"]:c23(),["SharedCodec488"]:c24(),["SharedCodec529"]:c25(),["SharedCodec530"]:c26(),["SharedCodec531"]:c27(),["TextModifierConfig"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

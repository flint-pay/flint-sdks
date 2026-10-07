import { d175 as c0, d881 as c1, d904 as c2, d926 as c3, d1807 as c4, d1808 as c5, d1811 as c6, d60 as c7, d1814 as c8, d77 as c9, d2042 as c10, d2044 as c11, d2047 as c12, d2313 as c13, d408 as c14, d412 as c15, d61 as c16, d1813 as c17, d2039 as c18, d2040 as c19, d2041 as c20, d2379 as c21 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2042 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2042;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["Product"]:c10(),["ProductOption"]:c11(),["ProductOptionValue"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec148"]:c14(),["SharedCodec149"]:c15(),["SharedCodec16"]:c16(),["SharedCodec487"]:c17(),["SharedCodec529"]:c18(),["SharedCodec530"]:c19(),["SharedCodec531"]:c20(),["TextModifierConfig"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProduct(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

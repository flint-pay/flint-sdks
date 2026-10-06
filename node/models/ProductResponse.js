import { d176 as c0, d881 as c1, d904 as c2, d926 as c3, d1806 as c4, d1807 as c5, d1810 as c6, d60 as c7, d1813 as c8, d77 as c9, d1823 as c10, d1822 as c11, d2041 as c12, d2043 as c13, d2046 as c14, d2048 as c15, d2157 as c16, d2158 as c17, d2312 as c18, d14 as c19, d408 as c20, d412 as c21, d61 as c22, d1812 as c23, d1821 as c24, d2038 as c25, d2039 as c26, d2040 as c27, d2378 as c28 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2048 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2048;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["NextAction"]:c10(),["NextActionMerchantAccountSession"]:c11(),["Product"]:c12(),["ProductOption"]:c13(),["ProductOptionValue"]:c14(),["ProductResponse"]:c15(),["ResponseMeta"]:c16(),["ResponseWarning"]:c17(),["SelectedProductOption"]:c18(),["SharedCodec1"]:c19(),["SharedCodec148"]:c20(),["SharedCodec149"]:c21(),["SharedCodec16"]:c22(),["SharedCodec486"]:c23(),["SharedCodec487"]:c24(),["SharedCodec528"]:c25(),["SharedCodec529"]:c26(),["SharedCodec530"]:c27(),["TextModifierConfig"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

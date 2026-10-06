import { d881 as c0, d904 as c1, d926 as c2, d1806 as c3, d1807 as c4, d1810 as c5, d60 as c6, d1813 as c7, d77 as c8, d1823 as c9, d1822 as c10, d2049 as c11, d2053 as c12, d2157 as c13, d2158 as c14, d2312 as c15, d14 as c16, d408 as c17, d412 as c18, d61 as c19, d1812 as c20, d1821 as c21, d2378 as c22 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2053 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2053;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["Image"]:c2(),["Modifier"]:c3(),["ModifierGroup"]:c4(),["ModifierOverride"]:c5(),["ModifierSet"]:c6(),["ModifierSetGroup"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ProductVariant"]:c11(),["ProductVariantResponse"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec1"]:c16(),["SharedCodec148"]:c17(),["SharedCodec149"]:c18(),["SharedCodec16"]:c19(),["SharedCodec486"]:c20(),["SharedCodec487"]:c21(),["TextModifierConfig"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

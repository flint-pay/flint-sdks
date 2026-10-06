import { d868 as c0, d891 as c1, d912 as c2, d1780 as c3, d1781 as c4, d1784 as c5, d60 as c6, d1787 as c7, d77 as c8, d1797 as c9, d1796 as c10, d2023 as c11, d2027 as c12, d2131 as c13, d2132 as c14, d2286 as c15, d14 as c16, d403 as c17, d407 as c18, d61 as c19, d1786 as c20, d1795 as c21, d2352 as c22 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2027 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2027;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["Image"]:c2(),["Modifier"]:c3(),["ModifierGroup"]:c4(),["ModifierOverride"]:c5(),["ModifierSet"]:c6(),["ModifierSetGroup"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ProductVariant"]:c11(),["ProductVariantResponse"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec1"]:c16(),["SharedCodec148"]:c17(),["SharedCodec149"]:c18(),["SharedCodec16"]:c19(),["SharedCodec484"]:c20(),["SharedCodec485"]:c21(),["TextModifierConfig"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d172 as c0, d868 as c1, d891 as c2, d912 as c3, d1780 as c4, d1781 as c5, d1784 as c6, d60 as c7, d1787 as c8, d77 as c9, d1797 as c10, d1796 as c11, d2015 as c12, d2016 as c13, d2017 as c14, d2020 as c15, d2131 as c16, d2132 as c17, d2286 as c18, d14 as c19, d403 as c20, d407 as c21, d61 as c22, d1786 as c23, d1795 as c24, d2012 as c25, d2013 as c26, d2014 as c27, d2352 as c28 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2016 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2016;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["NextAction"]:c10(),["NextActionMerchantAccountSession"]:c11(),["Product"]:c12(),["ProductListResponse"]:c13(),["ProductOption"]:c14(),["ProductOptionValue"]:c15(),["ResponseMeta"]:c16(),["ResponseWarning"]:c17(),["SelectedProductOption"]:c18(),["SharedCodec1"]:c19(),["SharedCodec148"]:c20(),["SharedCodec149"]:c21(),["SharedCodec16"]:c22(),["SharedCodec484"]:c23(),["SharedCodec485"]:c24(),["SharedCodec526"]:c25(),["SharedCodec527"]:c26(),["SharedCodec528"]:c27(),["TextModifierConfig"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

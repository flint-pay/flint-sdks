import { d172 as c0, d868 as c1, d891 as c2, d912 as c3, d1780 as c4, d1781 as c5, d1784 as c6, d60 as c7, d1787 as c8, d77 as c9, d2015 as c10, d2017 as c11, d2020 as c12, d2286 as c13, d403 as c14, d407 as c15, d61 as c16, d1786 as c17, d2012 as c18, d2013 as c19, d2014 as c20, d2352 as c21 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2015 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2015;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["Product"]:c10(),["ProductOption"]:c11(),["ProductOptionValue"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec148"]:c14(),["SharedCodec149"]:c15(),["SharedCodec16"]:c16(),["SharedCodec484"]:c17(),["SharedCodec526"]:c18(),["SharedCodec527"]:c19(),["SharedCodec528"]:c20(),["TextModifierConfig"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProduct(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

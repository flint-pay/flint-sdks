import { d171 as c0, d863 as c1, d885 as c2, d907 as c3, d1770 as c4, d1771 as c5, d1774 as c6, d57 as c7, d1777 as c8, d74 as c9, d2003 as c10, d2005 as c11, d2008 as c12, d2275 as c13, d399 as c14, d403 as c15, d58 as c16, d1776 as c17, d2000 as c18, d2001 as c19, d2002 as c20, d2340 as c21 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2003 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2003;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["Product"]:c10(),["ProductOption"]:c11(),["ProductOptionValue"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec145"]:c14(),["SharedCodec146"]:c15(),["SharedCodec15"]:c16(),["SharedCodec478"]:c17(),["SharedCodec516"]:c18(),["SharedCodec517"]:c19(),["SharedCodec518"]:c20(),["TextModifierConfig"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProduct(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

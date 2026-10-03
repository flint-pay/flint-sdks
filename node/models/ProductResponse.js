import { d171 as c0, d863 as c1, d885 as c2, d907 as c3, d1770 as c4, d1771 as c5, d1774 as c6, d57 as c7, d1777 as c8, d74 as c9, d1786 as c10, d1785 as c11, d2003 as c12, d2005 as c13, d2008 as c14, d2010 as c15, d2121 as c16, d2122 as c17, d2275 as c18, d399 as c19, d403 as c20, d58 as c21, d1776 as c22, d2000 as c23, d2001 as c24, d2002 as c25, d2340 as c26 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2010 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2010;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["NextAction"]:c10(),["NextActionMerchantAccountSession"]:c11(),["Product"]:c12(),["ProductOption"]:c13(),["ProductOptionValue"]:c14(),["ProductResponse"]:c15(),["ResponseMeta"]:c16(),["ResponseWarning"]:c17(),["SelectedProductOption"]:c18(),["SharedCodec145"]:c19(),["SharedCodec146"]:c20(),["SharedCodec15"]:c21(),["SharedCodec478"]:c22(),["SharedCodec516"]:c23(),["SharedCodec517"]:c24(),["SharedCodec518"]:c25(),["TextModifierConfig"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

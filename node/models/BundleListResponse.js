import { d59 as c0, d61 as c1, d64 as c2, d171 as c3, d907 as c4, d1770 as c5, d1771 as c6, d1774 as c7, d57 as c8, d1777 as c9, d74 as c10, d1786 as c11, d1785 as c12, d2121 as c13, d2122 as c14, d2275 as c15, d399 as c16, d58 as c17, d60 as c18, d1776 as c19, d2340 as c20 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d64 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d64;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Bundle"]:c0(),["BundleComponent"]:c1(),["BundleListResponse"]:c2(),["CategoryReference"]:c3(),["Image"]:c4(),["Modifier"]:c5(),["ModifierGroup"]:c6(),["ModifierOverride"]:c7(),["ModifierSet"]:c8(),["ModifierSetGroup"]:c9(),["MoneyValue"]:c10(),["NextAction"]:c11(),["NextActionMerchantAccountSession"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec145"]:c16(),["SharedCodec15"]:c17(),["SharedCodec16"]:c18(),["SharedCodec478"]:c19(),["TextModifierConfig"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundleListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

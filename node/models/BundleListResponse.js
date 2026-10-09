import { d58 as c0, d59 as c1, d61 as c2, d62 as c3, d136 as c4, d889 as c5, d1804 as c6, d1805 as c7, d1808 as c8, d56 as c9, d1811 as c10, d323 as c11, d1820 as c12, d1821 as c13, d2162 as c14, d2163 as c15, d2318 as c16, d14 as c17, d365 as c18, d57 as c19, d1810 as c20, d1819 as c21, d2413 as c22 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d62 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d62;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Bundle"]:c0(),["BundleComponent"]:c1(),["BundleComponentVariantSummary"]:c2(),["BundleListResponse"]:c3(),["CategoryReference"]:c4(),["Image"]:c5(),["Modifier"]:c6(),["ModifierGroup"]:c7(),["ModifierOverride"]:c8(),["ModifierSet"]:c9(),["ModifierSetGroup"]:c10(),["MoneyValue"]:c11(),["NextAction"]:c12(),["NextActionMerchantAccountSession"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SelectedProductOption"]:c16(),["SharedCodec1"]:c17(),["SharedCodec113"]:c18(),["SharedCodec12"]:c19(),["SharedCodec465"]:c20(),["SharedCodec466"]:c21(),["TextModifierConfig"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundleListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

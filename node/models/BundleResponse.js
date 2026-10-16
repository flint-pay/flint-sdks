import { d58 as c0, d59 as c1, d61 as c2, d63 as c3, d136 as c4, d894 as c5, d1807 as c6, d1808 as c7, d1811 as c8, d56 as c9, d1814 as c10, d323 as c11, d1823 as c12, d1824 as c13, d2178 as c14, d2179 as c15, d2334 as c16, d14 as c17, d365 as c18, d57 as c19, d1813 as c20, d1822 as c21, d2429 as c22 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d63 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d63;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Bundle"]:c0(),["BundleComponent"]:c1(),["BundleComponentVariantSummary"]:c2(),["BundleResponse"]:c3(),["CategoryReference"]:c4(),["Image"]:c5(),["Modifier"]:c6(),["ModifierGroup"]:c7(),["ModifierOverride"]:c8(),["ModifierSet"]:c9(),["ModifierSetGroup"]:c10(),["MoneyValue"]:c11(),["NextAction"]:c12(),["NextActionMerchantAccountSession"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SelectedProductOption"]:c16(),["SharedCodec1"]:c17(),["SharedCodec113"]:c18(),["SharedCodec12"]:c19(),["SharedCodec466"]:c20(),["SharedCodec467"]:c21(),["TextModifierConfig"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundleResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

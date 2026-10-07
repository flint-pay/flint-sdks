import { d58 as c0, d59 as c1, d61 as c2, d63 as c3, d135 as c4, d868 as c5, d1759 as c6, d1760 as c7, d1763 as c8, d56 as c9, d1766 as c10, d314 as c11, d1775 as c12, d1776 as c13, d2112 as c14, d2113 as c15, d2268 as c16, d14 as c17, d355 as c18, d57 as c19, d1765 as c20, d1774 as c21, d2329 as c22 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d63 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d63;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Bundle"]:c0(),["BundleComponent"]:c1(),["BundleComponentVariantSummary"]:c2(),["BundleResponse"]:c3(),["CategoryReference"]:c4(),["Image"]:c5(),["Modifier"]:c6(),["ModifierGroup"]:c7(),["ModifierOverride"]:c8(),["ModifierSet"]:c9(),["ModifierSetGroup"]:c10(),["MoneyValue"]:c11(),["NextAction"]:c12(),["NextActionMerchantAccountSession"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SelectedProductOption"]:c16(),["SharedCodec1"]:c17(),["SharedCodec111"]:c18(),["SharedCodec12"]:c19(),["SharedCodec447"]:c20(),["SharedCodec448"]:c21(),["TextModifierConfig"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundleResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

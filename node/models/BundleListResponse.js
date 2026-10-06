import { d62 as c0, d64 as c1, d67 as c2, d172 as c3, d912 as c4, d1780 as c5, d1781 as c6, d1784 as c7, d60 as c8, d1787 as c9, d77 as c10, d1797 as c11, d1796 as c12, d2131 as c13, d2132 as c14, d2286 as c15, d14 as c16, d403 as c17, d61 as c18, d63 as c19, d1786 as c20, d1795 as c21, d2352 as c22 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d67 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d67;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Bundle"]:c0(),["BundleComponent"]:c1(),["BundleListResponse"]:c2(),["CategoryReference"]:c3(),["Image"]:c4(),["Modifier"]:c5(),["ModifierGroup"]:c6(),["ModifierOverride"]:c7(),["ModifierSet"]:c8(),["ModifierSetGroup"]:c9(),["MoneyValue"]:c10(),["NextAction"]:c11(),["NextActionMerchantAccountSession"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec1"]:c16(),["SharedCodec148"]:c17(),["SharedCodec16"]:c18(),["SharedCodec17"]:c19(),["SharedCodec484"]:c20(),["SharedCodec485"]:c21(),["TextModifierConfig"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundleListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

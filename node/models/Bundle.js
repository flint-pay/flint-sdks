import { d58 as c0, d59 as c1, d61 as c2, d136 as c3, d889 as c4, d1804 as c5, d1805 as c6, d1808 as c7, d56 as c8, d1811 as c9, d323 as c10, d2318 as c11, d365 as c12, d57 as c13, d1810 as c14, d2413 as c15 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d58 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d58;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Bundle"]:c0(),["BundleComponent"]:c1(),["BundleComponentVariantSummary"]:c2(),["CategoryReference"]:c3(),["Image"]:c4(),["Modifier"]:c5(),["ModifierGroup"]:c6(),["ModifierOverride"]:c7(),["ModifierSet"]:c8(),["ModifierSetGroup"]:c9(),["MoneyValue"]:c10(),["SelectedProductOption"]:c11(),["SharedCodec113"]:c12(),["SharedCodec12"]:c13(),["SharedCodec465"]:c14(),["TextModifierConfig"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

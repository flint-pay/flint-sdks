import { d62 as c0, d64 as c1, d172 as c2, d912 as c3, d1780 as c4, d1781 as c5, d1784 as c6, d60 as c7, d1787 as c8, d77 as c9, d2286 as c10, d403 as c11, d61 as c12, d63 as c13, d1786 as c14, d2352 as c15 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d62 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d62;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Bundle"]:c0(),["BundleComponent"]:c1(),["CategoryReference"]:c2(),["Image"]:c3(),["Modifier"]:c4(),["ModifierGroup"]:c5(),["ModifierOverride"]:c6(),["ModifierSet"]:c7(),["ModifierSetGroup"]:c8(),["MoneyValue"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec148"]:c11(),["SharedCodec16"]:c12(),["SharedCodec17"]:c13(),["SharedCodec484"]:c14(),["TextModifierConfig"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

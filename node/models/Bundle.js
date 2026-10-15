import { d58 as c0, d59 as c1, d61 as c2, d136 as c3, d894 as c4, d1807 as c5, d1808 as c6, d1811 as c7, d56 as c8, d1814 as c9, d323 as c10, d2334 as c11, d365 as c12, d57 as c13, d1813 as c14, d2429 as c15 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d58 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d58;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Bundle"]:c0(),["BundleComponent"]:c1(),["BundleComponentVariantSummary"]:c2(),["CategoryReference"]:c3(),["Image"]:c4(),["Modifier"]:c5(),["ModifierGroup"]:c6(),["ModifierOverride"]:c7(),["ModifierSet"]:c8(),["ModifierSetGroup"]:c9(),["MoneyValue"]:c10(),["SelectedProductOption"]:c11(),["SharedCodec113"]:c12(),["SharedCodec12"]:c13(),["SharedCodec466"]:c14(),["TextModifierConfig"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

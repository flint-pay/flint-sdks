import { d1807 as c0, d1808 as c1, d1811 as c2, d56 as c3, d1814 as c4, d1816 as c5, d323 as c6, d1823 as c7, d1824 as c8, d2178 as c9, d2179 as c10, d14 as c11, d365 as c12, d1813 as c13, d1822 as c14, d2429 as c15 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1816 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1816;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierOverride"]:c2(),["ModifierSet"]:c3(),["ModifierSetGroup"]:c4(),["ModifierSetListResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec113"]:c12(),["SharedCodec466"]:c13(),["SharedCodec467"]:c14(),["TextModifierConfig"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

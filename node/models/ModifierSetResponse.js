import { d1804 as c0, d1805 as c1, d1808 as c2, d56 as c3, d1811 as c4, d1814 as c5, d323 as c6, d1820 as c7, d1821 as c8, d2162 as c9, d2163 as c10, d14 as c11, d365 as c12, d1810 as c13, d1819 as c14, d2413 as c15 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1814 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1814;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierOverride"]:c2(),["ModifierSet"]:c3(),["ModifierSetGroup"]:c4(),["ModifierSetResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec113"]:c12(),["SharedCodec465"]:c13(),["SharedCodec466"]:c14(),["TextModifierConfig"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

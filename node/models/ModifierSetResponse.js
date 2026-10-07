import { d1807 as c0, d1808 as c1, d1811 as c2, d60 as c3, d1814 as c4, d1817 as c5, d77 as c6, d1824 as c7, d1823 as c8, d2158 as c9, d2159 as c10, d14 as c11, d408 as c12, d1813 as c13, d1822 as c14, d2379 as c15 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1817 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1817;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierOverride"]:c2(),["ModifierSet"]:c3(),["ModifierSetGroup"]:c4(),["ModifierSetResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec148"]:c12(),["SharedCodec487"]:c13(),["SharedCodec488"]:c14(),["TextModifierConfig"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

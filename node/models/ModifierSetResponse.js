import { d1806 as c0, d1807 as c1, d1810 as c2, d60 as c3, d1813 as c4, d1816 as c5, d77 as c6, d1823 as c7, d1822 as c8, d2157 as c9, d2158 as c10, d14 as c11, d408 as c12, d1812 as c13, d1821 as c14, d2378 as c15 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1816 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1816;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierOverride"]:c2(),["ModifierSet"]:c3(),["ModifierSetGroup"]:c4(),["ModifierSetResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec148"]:c12(),["SharedCodec486"]:c13(),["SharedCodec487"]:c14(),["TextModifierConfig"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

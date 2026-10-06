import { d1806 as c0, d1807 as c1, d1808 as c2, d77 as c3, d1823 as c4, d1822 as c5, d2157 as c6, d2158 as c7, d14 as c8, d1821 as c9, d2378 as c10 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1808 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1808;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierGroupListResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec487"]:c9(),["TextModifierConfig"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierGroupListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

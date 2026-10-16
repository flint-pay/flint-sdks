import { d1807 as c0, d1808 as c1, d1809 as c2, d323 as c3, d1823 as c4, d1824 as c5, d2178 as c6, d2179 as c7, d14 as c8, d1822 as c9, d2429 as c10 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1809 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1809;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierGroupListResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec467"]:c9(),["TextModifierConfig"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierGroupListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

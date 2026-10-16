import { d323 as c0, d1823 as c1, d1824 as c2, d2178 as c3, d2179 as c4, d2239 as c5, d2237 as c6, d2253 as c7, d2288 as c8, d2290 as c9, d2292 as c10, d14 as c11, d1822 as c12, d2238 as c13, d2251 as c14, d2252 as c15, d2548 as c16 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2548 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2548;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["ReturnPolicy"]:c5(),["ReturnPolicyRevision"]:c6(),["ReturnPolicyScope"]:c7(),["ReturnRestockingFeePolicy"]:c8(),["ReturnShippingPolicy"]:c9(),["ReturnWindow"]:c10(),["SharedCodec1"]:c11(),["SharedCodec467"]:c12(),["SharedCodec559"]:c13(),["SharedCodec567"]:c14(),["SharedCodec568"]:c15(),["UpdateReturnPolicyResponse"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnPolicyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

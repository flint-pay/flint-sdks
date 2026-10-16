import { d323 as c0, d2250 as c1, d2253 as c2, d2288 as c3, d2290 as c4, d2292 as c5, d2204 as c6, d2203 as c7, d2244 as c8, d2243 as c9, d2249 as c10, d2247 as c11, d2246 as c12, d2245 as c13, d2248 as c14, d2251 as c15, d2252 as c16 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2250 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2250;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec533"]:c6(),["SharedCodec534"]:c7(),["SharedCodec560"]:c8(),["SharedCodec561"]:c9(),["SharedCodec562"]:c10(),["SharedCodec563"]:c11(),["SharedCodec564"]:c12(),["SharedCodec565"]:c13(),["SharedCodec566"]:c14(),["SharedCodec567"]:c15(),["SharedCodec568"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

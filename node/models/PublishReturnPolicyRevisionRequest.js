import { d323 as c0, d2118 as c1, d2250 as c2, d2253 as c3, d2288 as c4, d2290 as c5, d2292 as c6, d2204 as c7, d2203 as c8, d2244 as c9, d2243 as c10, d2249 as c11, d2247 as c12, d2246 as c13, d2245 as c14, d2248 as c15, d2251 as c16, d2252 as c17 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2118 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2118;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec533"]:c7(),["SharedCodec534"]:c8(),["SharedCodec560"]:c9(),["SharedCodec561"]:c10(),["SharedCodec562"]:c11(),["SharedCodec563"]:c12(),["SharedCodec564"]:c13(),["SharedCodec565"]:c14(),["SharedCodec566"]:c15(),["SharedCodec567"]:c16(),["SharedCodec568"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

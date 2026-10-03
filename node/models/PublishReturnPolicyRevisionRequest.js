import { d74 as c0, d2059 as c1, d2191 as c2, d2194 as c3, d2230 as c4, d2232 as c5, d2233 as c6, d2145 as c7, d2144 as c8, d2185 as c9, d2184 as c10, d2190 as c11, d2188 as c12, d2187 as c13, d2186 as c14, d2189 as c15, d2192 as c16, d2193 as c17 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2059 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2059;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec538"]:c7(),["SharedCodec539"]:c8(),["SharedCodec565"]:c9(),["SharedCodec566"]:c10(),["SharedCodec567"]:c11(),["SharedCodec568"]:c12(),["SharedCodec569"]:c13(),["SharedCodec570"]:c14(),["SharedCodec571"]:c15(),["SharedCodec572"]:c16(),["SharedCodec573"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

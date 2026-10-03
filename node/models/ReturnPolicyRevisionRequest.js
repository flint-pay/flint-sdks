import { d74 as c0, d2190 as c1, d2193 as c2, d2229 as c3, d2231 as c4, d2232 as c5, d2144 as c6, d2143 as c7, d2184 as c8, d2183 as c9, d2189 as c10, d2187 as c11, d2186 as c12, d2185 as c13, d2188 as c14, d2191 as c15, d2192 as c16 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2190 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2190;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec538"]:c6(),["SharedCodec539"]:c7(),["SharedCodec565"]:c8(),["SharedCodec566"]:c9(),["SharedCodec567"]:c10(),["SharedCodec568"]:c11(),["SharedCodec569"]:c12(),["SharedCodec570"]:c13(),["SharedCodec571"]:c14(),["SharedCodec572"]:c15(),["SharedCodec573"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

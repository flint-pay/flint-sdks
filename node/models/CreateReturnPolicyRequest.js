import { d468 as c0, d74 as c1, d2190 as c2, d2193 as c3, d2229 as c4, d2231 as c5, d2232 as c6, d2144 as c7, d2143 as c8, d2184 as c9, d2183 as c10, d2189 as c11, d2187 as c12, d2186 as c13, d2185 as c14, d2188 as c15, d2191 as c16, d2192 as c17 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d468 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d468;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MoneyValue"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec538"]:c7(),["SharedCodec539"]:c8(),["SharedCodec565"]:c9(),["SharedCodec566"]:c10(),["SharedCodec567"]:c11(),["SharedCodec568"]:c12(),["SharedCodec569"]:c13(),["SharedCodec570"]:c14(),["SharedCodec571"]:c15(),["SharedCodec572"]:c16(),["SharedCodec573"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

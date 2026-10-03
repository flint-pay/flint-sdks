import { d470 as c0, d74 as c1, d2193 as c2, d2196 as c3, d2232 as c4, d2234 as c5, d2235 as c6, d2147 as c7, d2146 as c8, d2187 as c9, d2186 as c10, d2192 as c11, d2190 as c12, d2189 as c13, d2188 as c14, d2191 as c15, d2194 as c16, d2195 as c17 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d470 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d470;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MoneyValue"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec538"]:c7(),["SharedCodec539"]:c8(),["SharedCodec565"]:c9(),["SharedCodec566"]:c10(),["SharedCodec567"]:c11(),["SharedCodec568"]:c12(),["SharedCodec569"]:c13(),["SharedCodec570"]:c14(),["SharedCodec571"]:c15(),["SharedCodec572"]:c16(),["SharedCodec573"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

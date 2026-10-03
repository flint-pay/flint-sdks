import { d74 as c0, d2193 as c1, d2196 as c2, d2232 as c3, d2234 as c4, d2235 as c5, d2147 as c6, d2146 as c7, d2187 as c8, d2186 as c9, d2192 as c10, d2190 as c11, d2189 as c12, d2188 as c13, d2191 as c14, d2194 as c15, d2195 as c16 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2193 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2193;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec538"]:c6(),["SharedCodec539"]:c7(),["SharedCodec565"]:c8(),["SharedCodec566"]:c9(),["SharedCodec567"]:c10(),["SharedCodec568"]:c11(),["SharedCodec569"]:c12(),["SharedCodec570"]:c13(),["SharedCodec571"]:c14(),["SharedCodec572"]:c15(),["SharedCodec573"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

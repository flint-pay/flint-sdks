import { d314 as c0, d2184 as c1, d2187 as c2, d2222 as c3, d2224 as c4, d2226 as c5, d2138 as c6, d2137 as c7, d2178 as c8, d2177 as c9, d2183 as c10, d2181 as c11, d2180 as c12, d2179 as c13, d2182 as c14, d2185 as c15, d2186 as c16 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2184 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2184;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec508"]:c6(),["SharedCodec509"]:c7(),["SharedCodec535"]:c8(),["SharedCodec536"]:c9(),["SharedCodec537"]:c10(),["SharedCodec538"]:c11(),["SharedCodec539"]:c12(),["SharedCodec540"]:c13(),["SharedCodec541"]:c14(),["SharedCodec542"]:c15(),["SharedCodec543"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

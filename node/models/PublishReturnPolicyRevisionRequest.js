import { d314 as c0, d2051 as c1, d2184 as c2, d2187 as c3, d2222 as c4, d2224 as c5, d2226 as c6, d2138 as c7, d2137 as c8, d2178 as c9, d2177 as c10, d2183 as c11, d2181 as c12, d2180 as c13, d2179 as c14, d2182 as c15, d2185 as c16, d2186 as c17 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2051 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2051;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec508"]:c7(),["SharedCodec509"]:c8(),["SharedCodec535"]:c9(),["SharedCodec536"]:c10(),["SharedCodec537"]:c11(),["SharedCodec538"]:c12(),["SharedCodec539"]:c13(),["SharedCodec540"]:c14(),["SharedCodec541"]:c15(),["SharedCodec542"]:c16(),["SharedCodec543"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

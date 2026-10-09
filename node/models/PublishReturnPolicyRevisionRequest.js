import { d323 as c0, d2100 as c1, d2234 as c2, d2237 as c3, d2272 as c4, d2274 as c5, d2276 as c6, d2188 as c7, d2187 as c8, d2228 as c9, d2227 as c10, d2233 as c11, d2231 as c12, d2230 as c13, d2229 as c14, d2232 as c15, d2235 as c16, d2236 as c17 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2100 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2100;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec528"]:c7(),["SharedCodec529"]:c8(),["SharedCodec555"]:c9(),["SharedCodec556"]:c10(),["SharedCodec557"]:c11(),["SharedCodec558"]:c12(),["SharedCodec559"]:c13(),["SharedCodec560"]:c14(),["SharedCodec561"]:c15(),["SharedCodec562"]:c16(),["SharedCodec563"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

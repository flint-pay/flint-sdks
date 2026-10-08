import { d323 as c0, d2234 as c1, d2237 as c2, d2272 as c3, d2274 as c4, d2276 as c5, d2188 as c6, d2187 as c7, d2228 as c8, d2227 as c9, d2233 as c10, d2231 as c11, d2230 as c12, d2229 as c13, d2232 as c14, d2235 as c15, d2236 as c16 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2234 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2234;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec528"]:c6(),["SharedCodec529"]:c7(),["SharedCodec555"]:c8(),["SharedCodec556"]:c9(),["SharedCodec557"]:c10(),["SharedCodec558"]:c11(),["SharedCodec559"]:c12(),["SharedCodec560"]:c13(),["SharedCodec561"]:c14(),["SharedCodec562"]:c15(),["SharedCodec563"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

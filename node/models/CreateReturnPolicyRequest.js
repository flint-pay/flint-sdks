import { d473 as c0, d77 as c1, d2203 as c2, d2206 as c3, d2242 as c4, d2244 as c5, d2245 as c6, d2157 as c7, d2156 as c8, d2197 as c9, d2196 as c10, d2202 as c11, d2200 as c12, d2199 as c13, d2198 as c14, d2201 as c15, d2204 as c16, d2205 as c17 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d473 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d473;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MoneyValue"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec549"]:c7(),["SharedCodec550"]:c8(),["SharedCodec576"]:c9(),["SharedCodec577"]:c10(),["SharedCodec578"]:c11(),["SharedCodec579"]:c12(),["SharedCodec580"]:c13(),["SharedCodec581"]:c14(),["SharedCodec582"]:c15(),["SharedCodec583"]:c16(),["SharedCodec584"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

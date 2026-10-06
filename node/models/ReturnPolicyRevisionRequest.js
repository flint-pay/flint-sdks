import { d77 as c0, d2203 as c1, d2206 as c2, d2242 as c3, d2244 as c4, d2245 as c5, d2157 as c6, d2156 as c7, d2197 as c8, d2196 as c9, d2202 as c10, d2200 as c11, d2199 as c12, d2198 as c13, d2201 as c14, d2204 as c15, d2205 as c16 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2203 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2203;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec549"]:c6(),["SharedCodec550"]:c7(),["SharedCodec576"]:c8(),["SharedCodec577"]:c9(),["SharedCodec578"]:c10(),["SharedCodec579"]:c11(),["SharedCodec580"]:c12(),["SharedCodec581"]:c13(),["SharedCodec582"]:c14(),["SharedCodec583"]:c15(),["SharedCodec584"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

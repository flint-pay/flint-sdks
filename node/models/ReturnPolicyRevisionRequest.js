import { d77 as c0, d2230 as c1, d2233 as c2, d2269 as c3, d2271 as c4, d2272 as c5, d2184 as c6, d2183 as c7, d2224 as c8, d2223 as c9, d2229 as c10, d2227 as c11, d2226 as c12, d2225 as c13, d2228 as c14, d2231 as c15, d2232 as c16 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2230 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2230;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec552"]:c6(),["SharedCodec553"]:c7(),["SharedCodec579"]:c8(),["SharedCodec580"]:c9(),["SharedCodec581"]:c10(),["SharedCodec582"]:c11(),["SharedCodec583"]:c12(),["SharedCodec584"]:c13(),["SharedCodec585"]:c14(),["SharedCodec586"]:c15(),["SharedCodec587"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d77 as c0, d2098 as c1, d2230 as c2, d2233 as c3, d2269 as c4, d2271 as c5, d2272 as c6, d2184 as c7, d2183 as c8, d2224 as c9, d2223 as c10, d2229 as c11, d2227 as c12, d2226 as c13, d2225 as c14, d2228 as c15, d2231 as c16, d2232 as c17 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2098 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2098;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec552"]:c7(),["SharedCodec553"]:c8(),["SharedCodec579"]:c9(),["SharedCodec580"]:c10(),["SharedCodec581"]:c11(),["SharedCodec582"]:c12(),["SharedCodec583"]:c13(),["SharedCodec584"]:c14(),["SharedCodec585"]:c15(),["SharedCodec586"]:c16(),["SharedCodec587"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

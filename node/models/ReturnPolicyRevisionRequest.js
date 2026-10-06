import { d77 as c0, d2229 as c1, d2232 as c2, d2268 as c3, d2270 as c4, d2271 as c5, d2183 as c6, d2182 as c7, d2223 as c8, d2222 as c9, d2228 as c10, d2226 as c11, d2225 as c12, d2224 as c13, d2227 as c14, d2230 as c15, d2231 as c16 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2229 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2229;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec551"]:c6(),["SharedCodec552"]:c7(),["SharedCodec578"]:c8(),["SharedCodec579"]:c9(),["SharedCodec580"]:c10(),["SharedCodec581"]:c11(),["SharedCodec582"]:c12(),["SharedCodec583"]:c13(),["SharedCodec584"]:c14(),["SharedCodec585"]:c15(),["SharedCodec586"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

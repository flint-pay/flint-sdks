import { d478 as c0, d77 as c1, d2229 as c2, d2232 as c3, d2268 as c4, d2270 as c5, d2271 as c6, d2183 as c7, d2182 as c8, d2223 as c9, d2222 as c10, d2228 as c11, d2226 as c12, d2225 as c13, d2224 as c14, d2227 as c15, d2230 as c16, d2231 as c17 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d478 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d478;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MoneyValue"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec551"]:c7(),["SharedCodec552"]:c8(),["SharedCodec578"]:c9(),["SharedCodec579"]:c10(),["SharedCodec580"]:c11(),["SharedCodec581"]:c12(),["SharedCodec582"]:c13(),["SharedCodec583"]:c14(),["SharedCodec584"]:c15(),["SharedCodec585"]:c16(),["SharedCodec586"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

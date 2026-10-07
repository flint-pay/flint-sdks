import { d77 as c0, d2104 as c1, d2236 as c2, d2239 as c3, d2275 as c4, d2277 as c5, d2278 as c6, d2190 as c7, d2189 as c8, d2230 as c9, d2229 as c10, d2235 as c11, d2233 as c12, d2232 as c13, d2231 as c14, d2234 as c15, d2237 as c16, d2238 as c17 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2104 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2104;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec556"]:c7(),["SharedCodec557"]:c8(),["SharedCodec583"]:c9(),["SharedCodec584"]:c10(),["SharedCodec585"]:c11(),["SharedCodec586"]:c12(),["SharedCodec587"]:c13(),["SharedCodec588"]:c14(),["SharedCodec589"]:c15(),["SharedCodec590"]:c16(),["SharedCodec591"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d77 as c0, d2236 as c1, d2239 as c2, d2275 as c3, d2277 as c4, d2278 as c5, d2190 as c6, d2189 as c7, d2230 as c8, d2229 as c9, d2235 as c10, d2233 as c11, d2232 as c12, d2231 as c13, d2234 as c14, d2237 as c15, d2238 as c16 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2236 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2236;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec556"]:c6(),["SharedCodec557"]:c7(),["SharedCodec583"]:c8(),["SharedCodec584"]:c9(),["SharedCodec585"]:c10(),["SharedCodec586"]:c11(),["SharedCodec587"]:c12(),["SharedCodec588"]:c13(),["SharedCodec589"]:c14(),["SharedCodec590"]:c15(),["SharedCodec591"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

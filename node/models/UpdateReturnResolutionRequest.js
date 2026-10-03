import { d74 as c0, d2217 as c1, d2221 as c2, d2222 as c3, d2225 as c4, d1936 as c5, d2213 as c6, d2212 as c7, d2215 as c8, d2214 as c9, d2216 as c10, d2434 as c11, d2458 as c12, d2459 as c13, d2460 as c14 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2460 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2460;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemReplacementRequest"]:c1(),["ReturnResolutionAdjustmentRequest"]:c2(),["ReturnResolutionAdjustmentSet"]:c3(),["ReturnResolutionLineItemReplacementRequest"]:c4(),["SharedCodec504"]:c5(),["SharedCodec579"]:c6(),["SharedCodec580"]:c7(),["SharedCodec581"]:c8(),["SharedCodec582"]:c9(),["SharedCodec583"]:c10(),["SharedCodec645"]:c11(),["SharedCodec651"]:c12(),["SharedCodec652"]:c13(),["UpdateReturnResolutionRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

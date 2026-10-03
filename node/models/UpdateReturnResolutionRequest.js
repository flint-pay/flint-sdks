import { d74 as c0, d2216 as c1, d2220 as c2, d2221 as c3, d2224 as c4, d1935 as c5, d2212 as c6, d2211 as c7, d2214 as c8, d2213 as c9, d2215 as c10, d2433 as c11, d2457 as c12, d2458 as c13, d2459 as c14 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2459 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2459;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemReplacementRequest"]:c1(),["ReturnResolutionAdjustmentRequest"]:c2(),["ReturnResolutionAdjustmentSet"]:c3(),["ReturnResolutionLineItemReplacementRequest"]:c4(),["SharedCodec504"]:c5(),["SharedCodec579"]:c6(),["SharedCodec580"]:c7(),["SharedCodec581"]:c8(),["SharedCodec582"]:c9(),["SharedCodec583"]:c10(),["SharedCodec645"]:c11(),["SharedCodec651"]:c12(),["SharedCodec652"]:c13(),["UpdateReturnResolutionRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

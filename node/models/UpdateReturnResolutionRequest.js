import { d74 as c0, d2219 as c1, d2223 as c2, d2224 as c3, d2227 as c4, d1938 as c5, d2215 as c6, d2214 as c7, d2217 as c8, d2216 as c9, d2218 as c10, d2436 as c11, d2460 as c12, d2461 as c13, d2462 as c14 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2462 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2462;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemReplacementRequest"]:c1(),["ReturnResolutionAdjustmentRequest"]:c2(),["ReturnResolutionAdjustmentSet"]:c3(),["ReturnResolutionLineItemReplacementRequest"]:c4(),["SharedCodec504"]:c5(),["SharedCodec579"]:c6(),["SharedCodec580"]:c7(),["SharedCodec581"]:c8(),["SharedCodec582"]:c9(),["SharedCodec583"]:c10(),["SharedCodec645"]:c11(),["SharedCodec651"]:c12(),["SharedCodec652"]:c13(),["UpdateReturnResolutionRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

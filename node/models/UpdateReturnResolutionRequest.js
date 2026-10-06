import { d77 as c0, d2229 as c1, d2233 as c2, d2234 as c3, d2237 as c4, d1949 as c5, d2225 as c6, d2224 as c7, d2227 as c8, d2226 as c9, d2228 as c10, d2448 as c11, d2472 as c12, d2473 as c13, d2474 as c14 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2474 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2474;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemReplacementRequest"]:c1(),["ReturnResolutionAdjustmentRequest"]:c2(),["ReturnResolutionAdjustmentSet"]:c3(),["ReturnResolutionLineItemReplacementRequest"]:c4(),["SharedCodec513"]:c5(),["SharedCodec590"]:c6(),["SharedCodec591"]:c7(),["SharedCodec592"]:c8(),["SharedCodec593"]:c9(),["SharedCodec594"]:c10(),["SharedCodec657"]:c11(),["SharedCodec663"]:c12(),["SharedCodec664"]:c13(),["UpdateReturnResolutionRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

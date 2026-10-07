import { d77 as c0, d2256 as c1, d2260 as c2, d2261 as c3, d2264 as c4, d1976 as c5, d2252 as c6, d2251 as c7, d2254 as c8, d2253 as c9, d2255 as c10, d2475 as c11, d2499 as c12, d2500 as c13, d2501 as c14 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2501 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2501;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemReplacementRequest"]:c1(),["ReturnResolutionAdjustmentRequest"]:c2(),["ReturnResolutionAdjustmentSet"]:c3(),["ReturnResolutionLineItemReplacementRequest"]:c4(),["SharedCodec516"]:c5(),["SharedCodec593"]:c6(),["SharedCodec594"]:c7(),["SharedCodec595"]:c8(),["SharedCodec596"]:c9(),["SharedCodec597"]:c10(),["SharedCodec660"]:c11(),["SharedCodec666"]:c12(),["SharedCodec667"]:c13(),["UpdateReturnResolutionRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

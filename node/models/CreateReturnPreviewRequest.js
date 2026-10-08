import { d429 as c0, d437 as c1, d447 as c2, d323 as c3, d2175 as c4, d2219 as c5, d2260 as c6, d2263 as c7, d2268 as c8, d434 as c9, d435 as c10, d444 as c11, d446 as c12, d445 as c13, d1980 as c14, d2173 as c15, d2174 as c16, d2255 as c17, d2254 as c18, d2257 as c19, d2256 as c20, d2258 as c21 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d437 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d437;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilitySelection"]:c4(),["ReturnLineItemRequest"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec141"]:c9(),["SharedCodec142"]:c10(),["SharedCodec143"]:c11(),["SharedCodec144"]:c12(),["SharedCodec145"]:c13(),["SharedCodec496"]:c14(),["SharedCodec522"]:c15(),["SharedCodec523"]:c16(),["SharedCodec569"]:c17(),["SharedCodec570"]:c18(),["SharedCodec571"]:c19(),["SharedCodec572"]:c20(),["SharedCodec573"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d465 as c0, d473 as c1, d483 as c2, d74 as c3, d2131 as c4, d2175 as c5, d2217 as c6, d2220 as c7, d2225 as c8, d470 as c9, d471 as c10, d480 as c11, d482 as c12, d481 as c13, d1935 as c14, d2129 as c15, d2130 as c16, d2212 as c17, d2211 as c18, d2214 as c19, d2213 as c20, d2215 as c21 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d473 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d473;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilitySelection"]:c4(),["ReturnLineItemRequest"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec175"]:c9(),["SharedCodec176"]:c10(),["SharedCodec177"]:c11(),["SharedCodec178"]:c12(),["SharedCodec179"]:c13(),["SharedCodec504"]:c14(),["SharedCodec532"]:c15(),["SharedCodec533"]:c16(),["SharedCodec579"]:c17(),["SharedCodec580"]:c18(),["SharedCodec581"]:c19(),["SharedCodec582"]:c20(),["SharedCodec583"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

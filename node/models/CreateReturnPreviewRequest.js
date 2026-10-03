import { d465 as c0, d473 as c1, d483 as c2, d74 as c3, d2132 as c4, d2176 as c5, d2218 as c6, d2221 as c7, d2226 as c8, d470 as c9, d471 as c10, d480 as c11, d482 as c12, d481 as c13, d1936 as c14, d2130 as c15, d2131 as c16, d2213 as c17, d2212 as c18, d2215 as c19, d2214 as c20, d2216 as c21 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d473 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d473;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilitySelection"]:c4(),["ReturnLineItemRequest"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec175"]:c9(),["SharedCodec176"]:c10(),["SharedCodec177"]:c11(),["SharedCodec178"]:c12(),["SharedCodec179"]:c13(),["SharedCodec504"]:c14(),["SharedCodec532"]:c15(),["SharedCodec533"]:c16(),["SharedCodec579"]:c17(),["SharedCodec580"]:c18(),["SharedCodec581"]:c19(),["SharedCodec582"]:c20(),["SharedCodec583"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

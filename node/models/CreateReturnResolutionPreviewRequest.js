import { d483 as c0, d74 as c1, d2218 as c2, d2221 as c3, d2226 as c4, d480 as c5, d482 as c6, d481 as c7, d1936 as c8, d2213 as c9, d2212 as c10, d2215 as c11, d2214 as c12, d2216 as c13 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d483 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d483;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["MoneyValue"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["ReturnResolutionLineItemRequest"]:c4(),["SharedCodec177"]:c5(),["SharedCodec178"]:c6(),["SharedCodec179"]:c7(),["SharedCodec504"]:c8(),["SharedCodec579"]:c9(),["SharedCodec580"]:c10(),["SharedCodec581"]:c11(),["SharedCodec582"]:c12(),["SharedCodec583"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

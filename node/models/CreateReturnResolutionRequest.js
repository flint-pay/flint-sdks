import { d448 as c0, d323 as c1, d2260 as c2, d2263 as c3, d2268 as c4, d444 as c5, d446 as c6, d445 as c7, d1980 as c8, d2255 as c9, d2254 as c10, d2257 as c11, d2256 as c12, d2258 as c13 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d448 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d448;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequest"]:c0(),["MoneyValue"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["ReturnResolutionLineItemRequest"]:c4(),["SharedCodec143"]:c5(),["SharedCodec144"]:c6(),["SharedCodec145"]:c7(),["SharedCodec496"]:c8(),["SharedCodec569"]:c9(),["SharedCodec570"]:c10(),["SharedCodec571"]:c11(),["SharedCodec572"]:c12(),["SharedCodec573"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

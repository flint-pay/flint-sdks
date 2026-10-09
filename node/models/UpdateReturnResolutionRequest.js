import { d323 as c0, d2259 as c1, d2263 as c2, d2264 as c3, d2267 as c4, d1980 as c5, d2255 as c6, d2254 as c7, d2257 as c8, d2256 as c9, d2258 as c10, d2513 as c11, d2537 as c12, d2538 as c13, d2539 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2539 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2539;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemReplacementRequest"]:c1(),["ReturnResolutionAdjustmentRequest"]:c2(),["ReturnResolutionAdjustmentSet"]:c3(),["ReturnResolutionLineItemReplacementRequest"]:c4(),["SharedCodec496"]:c5(),["SharedCodec569"]:c6(),["SharedCodec570"]:c7(),["SharedCodec571"]:c8(),["SharedCodec572"]:c9(),["SharedCodec573"]:c10(),["SharedCodec638"]:c11(),["SharedCodec644"]:c12(),["SharedCodec645"]:c13(),["UpdateReturnResolutionRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

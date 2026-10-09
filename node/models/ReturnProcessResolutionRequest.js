import { d323 as c0, d2242 as c1, d2260 as c2, d1980 as c3, d2255 as c4, d2254 as c5, d2257 as c6, d2256 as c7, d2258 as c8 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2242 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2242;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnProcessResolutionRequest"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["SharedCodec496"]:c3(),["SharedCodec569"]:c4(),["SharedCodec570"]:c5(),["SharedCodec571"]:c6(),["SharedCodec572"]:c7(),["SharedCodec573"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

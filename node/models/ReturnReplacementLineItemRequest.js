import { d323 as c0, d2260 as c1, d1980 as c2, d2255 as c3, d2254 as c4, d2257 as c5, d2256 as c6, d2258 as c7 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2260 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2260;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemRequest"]:c1(),["SharedCodec496"]:c2(),["SharedCodec569"]:c3(),["SharedCodec570"]:c4(),["SharedCodec571"]:c5(),["SharedCodec572"]:c6(),["SharedCodec573"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d323 as c0, d2259 as c1, d1980 as c2, d2255 as c3, d2254 as c4, d2257 as c5, d2256 as c6, d2258 as c7 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2259 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2259;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemReplacementRequest"]:c1(),["SharedCodec496"]:c2(),["SharedCodec569"]:c3(),["SharedCodec570"]:c4(),["SharedCodec571"]:c5(),["SharedCodec572"]:c6(),["SharedCodec573"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemReplacementRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

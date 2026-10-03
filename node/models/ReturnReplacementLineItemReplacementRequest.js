import { d74 as c0, d2216 as c1, d1935 as c2, d2212 as c3, d2211 as c4, d2214 as c5, d2213 as c6, d2215 as c7 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2216 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2216;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemReplacementRequest"]:c1(),["SharedCodec504"]:c2(),["SharedCodec579"]:c3(),["SharedCodec580"]:c4(),["SharedCodec581"]:c5(),["SharedCodec582"]:c6(),["SharedCodec583"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemReplacementRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

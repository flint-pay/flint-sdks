import { d77 as c0, d2262 as c1, d1982 as c2, d2258 as c3, d2257 as c4, d2260 as c5, d2259 as c6, d2261 as c7 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2262 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2262;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemReplacementRequest"]:c1(),["SharedCodec520"]:c2(),["SharedCodec597"]:c3(),["SharedCodec598"]:c4(),["SharedCodec599"]:c5(),["SharedCodec600"]:c6(),["SharedCodec601"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemReplacementRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

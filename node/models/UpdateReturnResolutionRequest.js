import { d77 as c0, d2262 as c1, d2266 as c2, d2267 as c3, d2270 as c4, d1982 as c5, d2258 as c6, d2257 as c7, d2260 as c8, d2259 as c9, d2261 as c10, d2481 as c11, d2505 as c12, d2506 as c13, d2507 as c14 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2507 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2507;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemReplacementRequest"]:c1(),["ReturnResolutionAdjustmentRequest"]:c2(),["ReturnResolutionAdjustmentSet"]:c3(),["ReturnResolutionLineItemReplacementRequest"]:c4(),["SharedCodec520"]:c5(),["SharedCodec597"]:c6(),["SharedCodec598"]:c7(),["SharedCodec599"]:c8(),["SharedCodec600"]:c9(),["SharedCodec601"]:c10(),["SharedCodec664"]:c11(),["SharedCodec670"]:c12(),["SharedCodec671"]:c13(),["UpdateReturnResolutionRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

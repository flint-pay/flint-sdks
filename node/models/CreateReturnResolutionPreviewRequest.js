import { d494 as c0, d77 as c1, d2263 as c2, d2266 as c3, d2271 as c4, d491 as c5, d493 as c6, d492 as c7, d1982 as c8, d2258 as c9, d2257 as c10, d2260 as c11, d2259 as c12, d2261 as c13 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d494 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d494;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["MoneyValue"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["ReturnResolutionLineItemRequest"]:c4(),["SharedCodec179"]:c5(),["SharedCodec180"]:c6(),["SharedCodec181"]:c7(),["SharedCodec520"]:c8(),["SharedCodec597"]:c9(),["SharedCodec598"]:c10(),["SharedCodec599"]:c11(),["SharedCodec600"]:c12(),["SharedCodec601"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

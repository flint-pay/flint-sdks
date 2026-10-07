import { d77 as c0, d2170 as c1, d2256 as c2, d2265 as c3, d2269 as c4, d2272 as c5, d2273 as c6 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2272 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2272;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnActor"]:c1(),["ReturnReplacementLineItem"]:c2(),["ReturnResolutionAdjustment"]:c3(),["ReturnResolutionLineItem"]:c4(),["ReturnResolutionPreview"]:c5(),["ReturnResolutionWarning"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnResolutionPreview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

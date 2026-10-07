import { d77 as c0, d1830 as c1, d1829 as c2, d2164 as c3, d2165 as c4, d2216 as c5, d14 as c6, d1828 as c7, d2503 as c8 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2503 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2503;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["ReturnReason"]:c5(),["SharedCodec1"]:c6(),["SharedCodec492"]:c7(),["UpdateReturnReasonResponse"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReasonResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

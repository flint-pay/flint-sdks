import { d1806 as c0, d1830 as c1, d1829 as c2, d14 as c3, d1828 as c4 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1806 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1806;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantReadinessAxis"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["SharedCodec1"]:c3(),["SharedCodec492"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantReadinessAxis(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

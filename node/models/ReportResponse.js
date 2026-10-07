import { d77 as c0, d1830 as c1, d1829 as c2, d2146 as c3, d2148 as c4, d2164 as c5, d2165 as c6, d14 as c7, d1552 as c8, d1554 as c9, d1553 as c10, d1555 as c11, d1556 as c12, d1828 as c13 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2148 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2148;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Report"]:c3(),["ReportResponse"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec416"]:c8(),["SharedCodec417"]:c9(),["SharedCodec418"]:c10(),["SharedCodec419"]:c11(),["SharedCodec420"]:c12(),["SharedCodec492"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReportResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

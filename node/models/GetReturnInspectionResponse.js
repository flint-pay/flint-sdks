import { d876 as c0, d77 as c1, d1830 as c2, d1829 as c3, d2164 as c4, d2165 as c5, d2170 as c6, d2172 as c7, d2184 as c8, d2185 as c9, d2182 as c10, d14 as c11, d1828 as c12, d2183 as c13 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d876 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d876;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GetReturnInspectionResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnInspection"]:c8(),["ReturnInspectionLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["SharedCodec1"]:c11(),["SharedCodec492"]:c12(),["SharedCodec552"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGetReturnInspectionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

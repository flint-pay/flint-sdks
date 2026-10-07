import { d577 as c0, d876 as c1, d77 as c2, d1830 as c3, d1829 as c4, d2164 as c5, d2165 as c6, d2170 as c7, d2172 as c8, d2184 as c9, d2185 as c10, d2182 as c11, d14 as c12, d1828 as c13, d2183 as c14 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d577 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d577;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DecideReturnInspectionLineItemResponse"]:c0(),["GetReturnInspectionResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["ReturnActor"]:c7(),["ReturnDisposition"]:c8(),["ReturnInspection"]:c9(),["ReturnInspectionLineItem"]:c10(),["ReturnSourceSystem"]:c11(),["SharedCodec1"]:c12(),["SharedCodec492"]:c13(),["SharedCodec552"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDecideReturnInspectionLineItemResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

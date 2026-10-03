import { d467 as c0, d849 as c1, d74 as c2, d1784 as c3, d1783 as c4, d2118 as c5, d2119 as c6, d2124 as c7, d2126 as c8, d2138 as c9, d2139 as c10, d2136 as c11, d2137 as c12 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d467 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d467;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnInspectionResponse"]:c0(),["GetReturnInspectionResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["ReturnActor"]:c7(),["ReturnDisposition"]:c8(),["ReturnInspection"]:c9(),["ReturnInspectionLineItem"]:c10(),["ReturnSourceSystem"]:c11(),["SharedCodec534"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnInspectionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d477 as c0, d870 as c1, d77 as c2, d1823 as c3, d1822 as c4, d2157 as c5, d2158 as c6, d2163 as c7, d2165 as c8, d2177 as c9, d2178 as c10, d2175 as c11, d14 as c12, d1821 as c13, d2176 as c14 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d477 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d477;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnInspectionResponse"]:c0(),["GetReturnInspectionResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["ReturnActor"]:c7(),["ReturnDisposition"]:c8(),["ReturnInspection"]:c9(),["ReturnInspectionLineItem"]:c10(),["ReturnSourceSystem"]:c11(),["SharedCodec1"]:c12(),["SharedCodec487"]:c13(),["SharedCodec547"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnInspectionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

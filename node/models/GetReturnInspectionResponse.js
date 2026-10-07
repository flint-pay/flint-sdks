import { d870 as c0, d77 as c1, d1824 as c2, d1823 as c3, d2158 as c4, d2159 as c5, d2164 as c6, d2166 as c7, d2178 as c8, d2179 as c9, d2176 as c10, d14 as c11, d1822 as c12, d2177 as c13 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d870 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d870;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GetReturnInspectionResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnInspection"]:c8(),["ReturnInspectionLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["SharedCodec1"]:c11(),["SharedCodec488"]:c12(),["SharedCodec548"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGetReturnInspectionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

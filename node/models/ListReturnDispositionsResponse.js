import { d1760 as c0, d77 as c1, d1824 as c2, d1823 as c3, d2158 as c4, d2159 as c5, d2164 as c6, d2166 as c7, d14 as c8, d1822 as c9 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1760 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1760;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnDispositionsResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["SharedCodec1"]:c8(),["SharedCodec488"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnDispositionsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

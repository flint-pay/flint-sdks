import { d869 as c0, d77 as c1, d1824 as c2, d1823 as c3, d2158 as c4, d2159 as c5, d2161 as c6, d2164 as c7, d2166 as c8, d14 as c9, d1822 as c10 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d869 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d869;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GetReturnDispositionResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RetryReturnDispositionResponse"]:c6(),["ReturnActor"]:c7(),["ReturnDisposition"]:c8(),["SharedCodec1"]:c9(),["SharedCodec488"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGetReturnDispositionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

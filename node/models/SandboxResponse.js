import { d760 as c0, d77 as c1, d1824 as c2, d1823 as c3, d2158 as c4, d2159 as c5, d2302 as c6, d14 as c7, d1822 as c8 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2302 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeveloperSandbox"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["SandboxResponse"]:c6(),["SharedCodec1"]:c7(),["SharedCodec488"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSandboxResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d167 as c0, d168 as c1, d166 as c2, d1819 as c3, d77 as c4, d1824 as c5, d1823 as c6, d2158 as c7, d2159 as c8, d14 as c9, d1822 as c10 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d168 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Capability"]:c0(),["CapabilityListResponse"]:c1(),["CapabilityRequirements"]:c2(),["MoneyMovementBlockedReason"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec488"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapabilityListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

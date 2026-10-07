import { d77 as c0, d1824 as c1, d1823 as c2, d1935 as c3, d1939 as c4, d1940 as c5, d2158 as c6, d2159 as c7, d14 as c8, d1822 as c9 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1939 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1939;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PartnerApp"]:c3(),["PartnerAppListResponse"]:c4(),["PartnerAppPermissionManifestEntry"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec488"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

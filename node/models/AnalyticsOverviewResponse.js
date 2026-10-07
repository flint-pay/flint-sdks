import { d12 as c0, d13 as c1, d256 as c2, d1818 as c3, d77 as c4, d1824 as c5, d1823 as c6, d2158 as c7, d2159 as c8, d14 as c9, d1822 as c10, d226 as c11 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d13 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d13;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AnalyticsOverview"]:c0(),["AnalyticsOverviewResponse"]:c1(),["CountMetric"]:c2(),["MoneyMetric"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec488"]:c10(),["SignedMoney"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAnalyticsOverviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

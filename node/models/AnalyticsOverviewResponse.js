import { d12 as c0, d13 as c1, d252 as c2, d1791 as c3, d77 as c4, d1797 as c5, d1796 as c6, d2131 as c7, d2132 as c8, d14 as c9, d1795 as c10, d223 as c11 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d13 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d13;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AnalyticsOverview"]:c0(),["AnalyticsOverviewResponse"]:c1(),["CountMetric"]:c2(),["MoneyMetric"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec485"]:c10(),["SignedMoney"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAnalyticsOverviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

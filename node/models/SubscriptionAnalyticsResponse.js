import { d77 as c0, d1797 as c1, d1796 as c2, d2131 as c3, d2132 as c4, d14 as c5, d1795 as c6, d2308 as c7, d2309 as c8, d2339 as c9, d2340 as c10, d2341 as c11 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2309 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2309;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SharedCodec1"]:c5(),["SharedCodec485"]:c6(),["SubscriptionAnalytics"]:c7(),["SubscriptionAnalyticsResponse"]:c8(),["SubscriptionSnapshotMetrics"]:c9(),["SubscriptionStatusCounts"]:c10(),["SubscriptionWindowMetrics"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionAnalyticsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

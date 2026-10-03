import { d74 as c0, d1786 as c1, d1785 as c2, d2121 as c3, d2122 as c4, d2296 as c5, d2297 as c6, d2327 as c7, d2328 as c8, d2329 as c9 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2297 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2297;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SubscriptionAnalytics"]:c5(),["SubscriptionAnalyticsResponse"]:c6(),["SubscriptionSnapshotMetrics"]:c7(),["SubscriptionStatusCounts"]:c8(),["SubscriptionWindowMetrics"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionAnalyticsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

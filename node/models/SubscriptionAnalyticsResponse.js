import { d74 as c0, d1784 as c1, d1783 as c2, d2119 as c3, d2120 as c4, d2294 as c5, d2295 as c6, d2325 as c7, d2326 as c8, d2327 as c9 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2295 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2295;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SubscriptionAnalytics"]:c5(),["SubscriptionAnalyticsResponse"]:c6(),["SubscriptionSnapshotMetrics"]:c7(),["SubscriptionStatusCounts"]:c8(),["SubscriptionWindowMetrics"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionAnalyticsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

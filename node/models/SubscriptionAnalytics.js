import { d74 as c0, d2296 as c1, d2327 as c2, d2328 as c3, d2329 as c4 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2296 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2296;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SubscriptionAnalytics"]:c1(),["SubscriptionSnapshotMetrics"]:c2(),["SubscriptionStatusCounts"]:c3(),["SubscriptionWindowMetrics"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionAnalytics(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

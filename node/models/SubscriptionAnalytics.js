import { d77 as c0, d2334 as c1, d2365 as c2, d2366 as c3, d2367 as c4 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2334 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2334;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SubscriptionAnalytics"]:c1(),["SubscriptionSnapshotMetrics"]:c2(),["SubscriptionStatusCounts"]:c3(),["SubscriptionWindowMetrics"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionAnalytics(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

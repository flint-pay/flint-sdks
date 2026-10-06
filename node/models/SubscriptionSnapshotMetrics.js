import { d77 as c0, d2365 as c1, d2366 as c2 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2365 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2365;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SubscriptionSnapshotMetrics"]:c1(),["SubscriptionStatusCounts"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionSnapshotMetrics(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

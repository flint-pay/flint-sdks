import { d69 as c0, d2129 as c1, d2159 as c2, d2160 as c3, d2161 as c4 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2129 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2129;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SubscriptionAnalytics"]:c1(),["SubscriptionSnapshotMetrics"]:c2(),["SubscriptionStatusCounts"]:c3(),["SubscriptionWindowMetrics"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionAnalytics(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

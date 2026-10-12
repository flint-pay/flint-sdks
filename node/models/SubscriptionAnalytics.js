import { d323 as c0, d2340 as c1, d2400 as c2, d2401 as c3, d2403 as c4 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d2340 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2340;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SubscriptionAnalytics"]:c1(),["SubscriptionSnapshotMetrics"]:c2(),["SubscriptionStatusCounts"]:c3(),["SubscriptionWindowMetrics"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionAnalytics(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

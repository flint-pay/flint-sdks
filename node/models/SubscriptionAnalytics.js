import { d323 as c0, d2356 as c1, d2416 as c2, d2417 as c3, d2419 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2356 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2356;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SubscriptionAnalytics"]:c1(),["SubscriptionSnapshotMetrics"]:c2(),["SubscriptionStatusCounts"]:c3(),["SubscriptionWindowMetrics"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionAnalytics(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

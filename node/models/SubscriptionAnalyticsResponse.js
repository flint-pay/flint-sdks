import { d77 as c0, d1823 as c1, d1822 as c2, d2157 as c3, d2158 as c4, d14 as c5, d1821 as c6, d2334 as c7, d2335 as c8, d2365 as c9, d2366 as c10, d2367 as c11 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2335 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2335;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SharedCodec1"]:c5(),["SharedCodec487"]:c6(),["SubscriptionAnalytics"]:c7(),["SubscriptionAnalyticsResponse"]:c8(),["SubscriptionSnapshotMetrics"]:c9(),["SubscriptionStatusCounts"]:c10(),["SubscriptionWindowMetrics"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionAnalyticsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

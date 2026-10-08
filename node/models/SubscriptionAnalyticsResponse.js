import { d323 as c0, d1820 as c1, d1821 as c2, d2162 as c3, d2163 as c4, d14 as c5, d1819 as c6, d2340 as c7, d2341 as c8, d2400 as c9, d2401 as c10, d2403 as c11 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2341 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2341;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SharedCodec1"]:c5(),["SharedCodec466"]:c6(),["SubscriptionAnalytics"]:c7(),["SubscriptionAnalyticsResponse"]:c8(),["SubscriptionSnapshotMetrics"]:c9(),["SubscriptionStatusCounts"]:c10(),["SubscriptionWindowMetrics"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionAnalyticsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

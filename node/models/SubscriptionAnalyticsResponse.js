import { d69 as c0, d1646 as c1, d1645 as c2, d1959 as c3, d1960 as c4, d2129 as c5, d2130 as c6, d2159 as c7, d2160 as c8, d2161 as c9 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2130 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2130;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SubscriptionAnalytics"]:c5(),["SubscriptionAnalyticsResponse"]:c6(),["SubscriptionSnapshotMetrics"]:c7(),["SubscriptionStatusCounts"]:c8(),["SubscriptionWindowMetrics"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionAnalyticsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

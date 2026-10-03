import { d10 as c0, d11 as c1, d250 as c2, d1781 as c3, d74 as c4, d1786 as c5, d1785 as c6, d2121 as c7, d2122 as c8, d1806 as c9 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d11 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d11;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AnalyticsOverview"]:c0(),["AnalyticsOverviewResponse"]:c1(),["CountMetric"]:c2(),["MoneyMetric"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SignedMoney"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAnalyticsOverviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

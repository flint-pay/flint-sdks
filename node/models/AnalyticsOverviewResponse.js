import { d10 as c0, d11 as c1, d248 as c2, d1779 as c3, d74 as c4, d1784 as c5, d1783 as c6, d2118 as c7, d2119 as c8, d1804 as c9 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d11 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d11;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AnalyticsOverview"]:c0(),["AnalyticsOverviewResponse"]:c1(),["CountMetric"]:c2(),["MoneyMetric"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SignedMoney"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAnalyticsOverviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

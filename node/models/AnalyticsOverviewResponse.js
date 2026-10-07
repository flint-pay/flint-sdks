import { d12 as c0, d13 as c1, d218 as c2, d1770 as c3, d314 as c4, d1775 as c5, d1776 as c6, d2112 as c7, d2113 as c8, d14 as c9, d1774 as c10, d1970 as c11 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d13 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d13;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AnalyticsOverview"]:c0(),["AnalyticsOverviewResponse"]:c1(),["CountMetric"]:c2(),["MoneyMetric"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec448"]:c10(),["SignedMoney"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAnalyticsOverviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

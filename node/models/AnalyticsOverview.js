import { d10 as c0, d250 as c1, d1781 as c2, d1806 as c3 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d10 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AnalyticsOverview"]:c0(),["CountMetric"]:c1(),["MoneyMetric"]:c2(),["SignedMoney"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAnalyticsOverview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

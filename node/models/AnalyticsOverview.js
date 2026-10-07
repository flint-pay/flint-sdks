import { d12 as c0, d257 as c1, d1824 as c2, d227 as c3 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d12 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d12;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AnalyticsOverview"]:c0(),["CountMetric"]:c1(),["MoneyMetric"]:c2(),["SignedMoney"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAnalyticsOverview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

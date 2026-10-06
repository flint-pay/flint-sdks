import { d12 as c0, d256 as c1, d1817 as c2, d226 as c3 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d12 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d12;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AnalyticsOverview"]:c0(),["CountMetric"]:c1(),["MoneyMetric"]:c2(),["SignedMoney"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAnalyticsOverview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

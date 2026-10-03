import { d74 as c0, d1337 as c1, d2442 as c2, d2443 as c3 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2443 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2443;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec373"]:c1(),["SharedCodec648"]:c2(),["UpdatePayoutSettingsRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePayoutSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

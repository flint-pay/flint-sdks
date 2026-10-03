import { d38 as c0, d2330 as c1, d2331 as c2, d2332 as c3, d2333 as c4 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2333 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2333;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec5"]:c0(),["SharedCodec603"]:c1(),["SharedCodec604"]:c2(),["SharedCodec605"]:c3(),["TaxBreakdown"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxBreakdown(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

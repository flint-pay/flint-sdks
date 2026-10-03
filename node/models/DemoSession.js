import { d734 as c0, d13 as c1, d12 as c2, d733 as c3 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d734 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d734;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DemoSession"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec234"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDemoSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

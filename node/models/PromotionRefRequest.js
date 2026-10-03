import { d2033 as c0, d2031 as c1, d2032 as c2 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2033 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2033;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRefRequest"]:c0(),["SharedCodec520"]:c1(),["SharedCodec521"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRefRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d2154 as c0, d20 as c1, d937 as c2 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2154 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2154;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResourceTimelineEntry"]:c0(),["SharedCodec2"]:c1(),["SharedCodec287"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResourceTimelineEntry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

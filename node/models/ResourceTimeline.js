import { d2153 as c0, d2154 as c1, d20 as c2, d937 as c3, d2152 as c4 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2153 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2153;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResourceTimeline"]:c0(),["ResourceTimelineEntry"]:c1(),["SharedCodec2"]:c2(),["SharedCodec287"]:c3(),["SharedCodec544"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResourceTimeline(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

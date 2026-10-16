import { d2174 as c0, d2175 as c1, d20 as c2, d902 as c3, d2173 as c4 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2174 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2174;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResourceTimeline"]:c0(),["ResourceTimelineEntry"]:c1(),["SharedCodec2"]:c2(),["SharedCodec252"]:c3(),["SharedCodec526"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResourceTimeline(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

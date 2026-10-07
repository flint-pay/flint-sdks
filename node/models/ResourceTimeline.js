import { d2160 as c0, d2161 as c1, d20 as c2, d943 as c3, d2159 as c4 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2160 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2160;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResourceTimeline"]:c0(),["ResourceTimelineEntry"]:c1(),["SharedCodec2"]:c2(),["SharedCodec291"]:c3(),["SharedCodec549"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResourceTimeline(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

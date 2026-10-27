import { d3811 as c0, d3812 as c1, d3813 as c2 } from '../descriptors/data/159.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3811 as d3811 } from '../descriptors/data/159.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3811;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRefRequest"]:c0(),["SharedCodec1038"]:c1(),["SharedCodec1039"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRefRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

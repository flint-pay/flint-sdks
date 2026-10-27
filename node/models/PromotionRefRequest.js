import { d3811 as c0, d3812 as c1, d3813 as c2 } from '../descriptors/data/159.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3811 as d3811 } from '../descriptors/data/159.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3811;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRefRequest"]:c0(),["SharedCodec1038"]:c1(),["SharedCodec1039"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRefRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

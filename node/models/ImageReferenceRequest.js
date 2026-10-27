import { d3630 as c0 } from '../descriptors/data/150.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3630 as d3630 } from '../descriptors/data/150.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3630;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageReferenceRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeImageReferenceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

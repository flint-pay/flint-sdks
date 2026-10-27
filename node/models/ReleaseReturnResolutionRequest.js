import { d889 as c0 } from '../descriptors/data/39.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d889 as d889 } from '../descriptors/data/39.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d889;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReleaseReturnResolutionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReleaseReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

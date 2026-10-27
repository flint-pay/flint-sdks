import { d2486 as c0 } from '../descriptors/data/101.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2486 as d2486 } from '../descriptors/data/101.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2486;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateReturnRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

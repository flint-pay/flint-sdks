import { d4932 as c0 } from '../descriptors/data/224.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2481 as c1 } from '../descriptors/data/100.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2481 as d2481 } from '../descriptors/data/100.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2481;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1226"]:c0(),["UpdateReturnReasonRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReasonRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

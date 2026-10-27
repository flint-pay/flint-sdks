import { d921 as c0 } from '../descriptors/data/41.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4890 as c1 } from '../descriptors/data/221.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d921 as d921 } from '../descriptors/data/41.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d921;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeAll"]:c0(),["SharedCodec1095"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeAll(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d77 as c0, d78 as c1 } from '../descriptors/data/3.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d77 as d77 } from '../descriptors/data/3.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d77;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelReturnRequest"]:c0(),["CancelReturnResolutionRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

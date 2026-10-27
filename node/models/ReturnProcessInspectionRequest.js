import { d4969 as c0 } from '../descriptors/data/227.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4969 as d4969 } from '../descriptors/data/227.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4969;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnProcessInspectionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessInspectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

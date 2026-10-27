import { d2509 as c0 } from '../descriptors/data/102.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2509 as d2509 } from '../descriptors/data/102.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2509;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["WaiveReturnLineInspectionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWaiveReturnLineInspectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

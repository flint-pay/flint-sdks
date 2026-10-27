import { d270 as c0 } from '../descriptors/data/15.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4965 as c1 } from '../descriptors/data/226.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4977 as c2, d4978 as c3 } from '../descriptors/data/228.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d270 as d270 } from '../descriptors/data/15.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d270;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DecideReturnRequest"]:c0(),["ReturnLineDecision"]:c1(),["SharedCodec1078"]:c2(),["SharedCodec1079"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

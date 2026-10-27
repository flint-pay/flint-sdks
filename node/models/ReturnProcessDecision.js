import { d4967 as c0 } from '../descriptors/data/227.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4977 as c1, d4978 as c2 } from '../descriptors/data/228.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4967 as d4967 } from '../descriptors/data/227.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4967;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnProcessDecision"]:c0(),["SharedCodec1078"]:c1(),["SharedCodec1079"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

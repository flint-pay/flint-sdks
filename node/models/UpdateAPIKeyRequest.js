import { d3047 as c0 } from '../descriptors/data/118.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3031 as c1 } from '../descriptors/data/117.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3059 as c2 } from '../descriptors/data/119.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2430 as c3 } from '../descriptors/data/96.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2430 as d2430 } from '../descriptors/data/96.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2430;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec0"]:c0(),["SharedCodec1"]:c1(),["SharedCodec1171"]:c2(),["UpdateAPIKeyRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

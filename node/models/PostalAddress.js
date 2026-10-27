import { d3448 as c0 } from '../descriptors/data/140.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3448 as d3448 } from '../descriptors/data/140.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3448;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PostalAddress"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePostalAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

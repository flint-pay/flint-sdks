import { d3082 as c0 } from '../descriptors/data/120.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3094 as c1 } from '../descriptors/data/121.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4740 as c2 } from '../descriptors/data/213.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4754 as c3, d4755 as c4 } from '../descriptors/data/214.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2472 as c5 } from '../descriptors/data/100.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2472 as d2472 } from '../descriptors/data/100.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2472;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["SharedCodec1173"]:c1(),["SharedCodec1221"]:c2(),["UpdateProductOptionRequest"]:c3(),["UpdateProductOptionValueRequest"]:c4(),["UpdateProductRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

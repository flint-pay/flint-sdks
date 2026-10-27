import { d50 as c0 } from '../descriptors/data/1.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4377 as c1 } from '../descriptors/data/191.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d50 as d50 } from '../descriptors/data/1.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d50;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerReturnReplacementLineItemInputBundle"]:c0(),["SharedCodec29"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerReturnReplacementLineItemInputBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

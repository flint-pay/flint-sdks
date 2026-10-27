import { d3256 as c0 } from '../descriptors/data/130.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3198 as c1 } from '../descriptors/data/127.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3256 as d3256 } from '../descriptors/data/130.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3256;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["SharedCodec369"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardCustomAmountBounds(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

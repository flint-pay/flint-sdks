import { d51 as c0 } from '../descriptors/data/1.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4378 as c1 } from '../descriptors/data/191.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d51 as d51 } from '../descriptors/data/1.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d51;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerReturnReplacementLineItemInputVariant"]:c0(),["SharedCodec30"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerReturnReplacementLineItemInputVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

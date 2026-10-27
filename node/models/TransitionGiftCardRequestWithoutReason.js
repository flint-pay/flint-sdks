import { d3972 as c0 } from '../descriptors/data/168.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2429 as c1 } from '../descriptors/data/96.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2429 as d2429 } from '../descriptors/data/96.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2429;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1170"]:c0(),["TransitionGiftCardRequestWithoutReason"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransitionGiftCardRequestWithoutReason(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

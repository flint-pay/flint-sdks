import { d2428 as c0 } from '../descriptors/data/96.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2428 as d2428 } from '../descriptors/data/96.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2428;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TransitionGiftCardRequestFreeze"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransitionGiftCardRequestFreeze(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

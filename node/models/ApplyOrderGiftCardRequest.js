import { d15 as c0 } from '../descriptors/data/0.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d15 as d15 } from '../descriptors/data/0.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d15;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApplyOrderGiftCardRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApplyOrderGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

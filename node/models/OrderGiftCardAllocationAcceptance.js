import { d4532 as c0 } from '../descriptors/data/199.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4579 as c1, d4580 as c2, d4581 as c3 } from '../descriptors/data/203.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4532 as d4532 } from '../descriptors/data/199.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4532;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderGiftCardAllocationAcceptance"]:c0(),["SharedCodec975"]:c1(),["SharedCodec976"]:c2(),["SharedCodec977"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderGiftCardAllocationAcceptance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

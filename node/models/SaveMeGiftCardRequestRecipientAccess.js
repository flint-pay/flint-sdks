import { d954 as c0 } from '../descriptors/data/42.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4319 as c1 } from '../descriptors/data/189.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d954 as d954 } from '../descriptors/data/42.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d954;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequestRecipientAccess"]:c0(),["SharedCodec1139"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequestRecipientAccess(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

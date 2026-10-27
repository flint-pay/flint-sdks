import { d418 as c0 } from '../descriptors/data/23.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d418 as d418 } from '../descriptors/data/23.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d418;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardVersionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardVersionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

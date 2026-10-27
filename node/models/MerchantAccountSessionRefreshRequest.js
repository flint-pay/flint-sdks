import { d779 as c0 } from '../descriptors/data/33.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d779 as d779 } from '../descriptors/data/33.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d779;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionRefreshRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionRefreshRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

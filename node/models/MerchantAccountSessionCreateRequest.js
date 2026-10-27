import { d778 as c0 } from '../descriptors/data/33.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4456 as c1, d4457 as c2 } from '../descriptors/data/195.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d778 as d778 } from '../descriptors/data/33.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d778;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionCreateRequest"]:c0(),["SharedCodec961"]:c1(),["SharedCodec962"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

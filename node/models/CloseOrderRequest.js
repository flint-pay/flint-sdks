import { d98 as c0 } from '../descriptors/data/3.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d98 as d98 } from '../descriptors/data/3.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d98;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CloseOrderRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCloseOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d2476 as c0 } from '../descriptors/data/100.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2476 as d2476 } from '../descriptors/data/100.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2476;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateRefundRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

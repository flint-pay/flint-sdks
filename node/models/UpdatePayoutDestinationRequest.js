import { d2470 as c0 } from '../descriptors/data/99.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2470 as d2470 } from '../descriptors/data/99.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2470;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdatePayoutDestinationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePayoutDestinationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d5160 as c0, d5161 as c1, d5168 as c2 } from '../descriptors/data/237.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5168 as d5168 } from '../descriptors/data/237.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1144"]:c0(),["SharedCodec1145"]:c1(),["SubscriptionBillingStartRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingStartRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

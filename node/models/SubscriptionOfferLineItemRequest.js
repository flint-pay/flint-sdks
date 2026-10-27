import { d5169 as c0 } from '../descriptors/data/237.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5169 as d5169 } from '../descriptors/data/237.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5169;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionOfferLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionOfferLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

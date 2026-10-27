import { d4206 as c0, d4207 as c3, d4208 as c4 } from '../descriptors/data/179.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4432 as c1, d4433 as c2, d4435 as c5 } from '../descriptors/data/194.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4435 as d4435 } from '../descriptors/data/194.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4435;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDeliveryDestinationAddressRequest"]:c0(),["SharedCodec1146"]:c1(),["SharedCodec1147"]:c2(),["SharedCodec973"]:c3(),["SharedCodec974"]:c4(),["SubscriptionDeliveryDestinationRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryDestinationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

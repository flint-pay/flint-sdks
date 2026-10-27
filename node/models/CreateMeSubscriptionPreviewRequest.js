import { d180 as c0 } from '../descriptors/data/9.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4206 as c1, d4207 as c6, d4208 as c7 } from '../descriptors/data/179.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4432 as c2, d4433 as c3, d4435 as c8 } from '../descriptors/data/194.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4425 as c4, d4426 as c5 } from '../descriptors/data/193.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d180 as d180 } from '../descriptors/data/9.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d180;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateMeSubscriptionPreviewRequest"]:c0(),["OrderDeliveryDestinationAddressRequest"]:c1(),["SharedCodec1146"]:c2(),["SharedCodec1147"]:c3(),["SharedCodec162"]:c4(),["SharedCodec163"]:c5(),["SharedCodec973"]:c6(),["SharedCodec974"]:c7(),["SubscriptionDeliveryDestinationRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

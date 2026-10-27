import { d3293 as c0, d3294 as c6, d3295 as c7 } from '../descriptors/data/131.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4206 as c1, d4207 as c8, d4208 as c9 } from '../descriptors/data/179.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5172 as c2, d5173 as c3 } from '../descriptors/data/238.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4432 as c4, d4433 as c5, d4435 as c11, d4436 as c12 } from '../descriptors/data/194.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5194 as c10 } from '../descriptors/data/239.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2500 as c13 } from '../descriptors/data/102.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2500 as d2500 } from '../descriptors/data/102.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2500;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliverySelectionRecipientRequest"]:c0(),["OrderDeliveryDestinationAddressRequest"]:c1(),["SharedCodec1142"]:c2(),["SharedCodec1143"]:c3(),["SharedCodec1146"]:c4(),["SharedCodec1147"]:c5(),["SharedCodec47"]:c6(),["SharedCodec48"]:c7(),["SharedCodec973"]:c8(),["SharedCodec974"]:c9(),["SubscriptionBillingScheduleUpdateRequest"]:c10(),["SubscriptionDeliveryDestinationRequest"]:c11(),["SubscriptionDeliveryRequest"]:c12(),["UpdateSubscriptionRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

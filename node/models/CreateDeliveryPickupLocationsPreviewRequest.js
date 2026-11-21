import { d273 as c0 } from '../descriptors/data/13.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8692 as c1, d8693 as c2, d8698 as c3, d8694 as c5, d8699 as c6, d8700 as c7, d8695 as c8, d8696 as c9 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8667 as c4 } from '../descriptors/data/386.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d273 as d273 } from '../descriptors/data/13.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d273;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryPickupLocationsPreviewRequest"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryBuyerLocationRequest"]:c2(),["DeliveryCoordinateRequest"]:c3(),["DeliveryPickupAvailabilityMaximumDistanceRequest"]:c4(),["SharedCodec736"]:c5(),["SharedCodec742"]:c6(),["SharedCodec743"]:c7(),["SharedCodec744"]:c8(),["SharedCodec745"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryPickupLocationsPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

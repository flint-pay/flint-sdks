import { d569 as c0, d575 as c1, d581 as c2, d630 as c3, d2062 as c4, d191 as c5, d192 as c6 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2062 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2062;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationRequest"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryPickupAvailabilityMaximumDistanceRequest"]:c3(),["QueryDeliveryPickupAvailabilityRequest"]:c4(),["SharedCodec55"]:c5(),["SharedCodec56"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeQueryDeliveryPickupAvailabilityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

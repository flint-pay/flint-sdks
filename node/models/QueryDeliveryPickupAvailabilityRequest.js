import { d571 as c0, d577 as c1, d583 as c2, d632 as c3, d2065 as c4, d193 as c5, d194 as c6 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2065 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2065;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationRequest"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryPickupAvailabilityMaximumDistanceRequest"]:c3(),["QueryDeliveryPickupAvailabilityRequest"]:c4(),["SharedCodec55"]:c5(),["SharedCodec56"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeQueryDeliveryPickupAvailabilityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

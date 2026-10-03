import { d571 as c0, d577 as c1, d583 as c2, d632 as c3, d2065 as c4, d193 as c5, d194 as c6 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2065 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2065;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationRequest"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryPickupAvailabilityMaximumDistanceRequest"]:c3(),["QueryDeliveryPickupAvailabilityRequest"]:c4(),["SharedCodec55"]:c5(),["SharedCodec56"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeQueryDeliveryPickupAvailabilityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d193 as c0 } from '../descriptors/data/8.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4514 as c1, d4515 as c2, d4516 as c5, d4517 as c8, d4518 as c9 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4542 as c3, d4543 as c6, d4544 as c7 } from '../descriptors/data/195.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5010 as c4 } from '../descriptors/data/221.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d193 as d193 } from '../descriptors/data/8.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d193;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryPickupLocationsPreviewRequest"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryBuyerLocationRequest"]:c2(),["DeliveryCoordinateRequest"]:c3(),["DeliveryPickupAvailabilityMaximumDistanceRequest"]:c4(),["SharedCodec373"]:c5(),["SharedCodec374"]:c6(),["SharedCodec375"]:c7(),["SharedCodec376"]:c8(),["SharedCodec377"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryPickupLocationsPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

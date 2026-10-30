import { d4514 as c0, d4515 as c1, d4516 as c3, d4517 as c6, d4518 as c7 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4542 as c2, d4543 as c4, d4544 as c5 } from '../descriptors/data/195.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4515 as d4515 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4515;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationRequest"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec373"]:c3(),["SharedCodec374"]:c4(),["SharedCodec375"]:c5(),["SharedCodec376"]:c6(),["SharedCodec377"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

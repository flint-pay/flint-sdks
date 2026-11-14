import { d6536 as c0, d6537 as c1, d6542 as c2, d6538 as c3, d6543 as c4, d6544 as c5, d6539 as c6, d6540 as c7 } from '../descriptors/data/302.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6537 as d6537 } from '../descriptors/data/302.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6537;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationRequest"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec510"]:c3(),["SharedCodec511"]:c4(),["SharedCodec512"]:c5(),["SharedCodec513"]:c6(),["SharedCodec514"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

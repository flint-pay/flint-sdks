import { d6536 as c0, d6542 as c2, d6538 as c3, d6544 as c4 } from '../descriptors/data/302.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d468 as c1 } from '../descriptors/data/27.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d468 as d468 } from '../descriptors/data/27.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d468;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationInputCoordinate"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec510"]:c3(),["SharedCodec512"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationInputCoordinate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

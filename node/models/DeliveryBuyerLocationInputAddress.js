import { d6536 as c0, d6542 as c2, d6538 as c3, d6543 as c4 } from '../descriptors/data/302.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d467 as c1 } from '../descriptors/data/27.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d467 as d467 } from '../descriptors/data/27.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d467;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationInputAddress"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec510"]:c3(),["SharedCodec511"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationInputAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

import { d8692 as c0, d8698 as c2, d8694 as c3, d8700 as c4 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d532 as c1 } from '../descriptors/data/30.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d532 as d532 } from '../descriptors/data/30.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d532;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationInputCoordinate"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec736"]:c3(),["SharedCodec743"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationInputCoordinate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

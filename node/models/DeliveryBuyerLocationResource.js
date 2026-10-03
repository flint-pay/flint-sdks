import { d570 as c0, d193 as c1, d581 as c2, d191 as c3, d192 as c4 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d193 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d193;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryBuyerLocationResource"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec55"]:c3(),["SharedCodec56"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

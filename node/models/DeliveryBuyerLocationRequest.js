import { d6535 as c0, d6536 as c1, d6541 as c2, d6537 as c3, d6542 as c4, d6543 as c5, d6538 as c6, d6539 as c7 } from '../descriptors/data/299.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6536 as d6536 } from '../descriptors/data/299.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6536;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationRequest"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec506"]:c3(),["SharedCodec507"]:c4(),["SharedCodec508"]:c5(),["SharedCodec509"]:c6(),["SharedCodec510"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

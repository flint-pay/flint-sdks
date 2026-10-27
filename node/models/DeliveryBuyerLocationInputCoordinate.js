import { d3165 as c0 } from '../descriptors/data/124.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d274 as c1 } from '../descriptors/data/15.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3179 as c2, d3181 as c3 } from '../descriptors/data/126.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d274 as d274 } from '../descriptors/data/15.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d274;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationInputCoordinate"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec242"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationInputCoordinate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

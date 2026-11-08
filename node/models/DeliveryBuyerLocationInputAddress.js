import { d4545 as c0, d4547 as c3 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d400 as c1 } from '../descriptors/data/22.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4573 as c2, d4574 as c4 } from '../descriptors/data/196.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d400 as d400 } from '../descriptors/data/22.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d400;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationInputAddress"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec375"]:c3(),["SharedCodec376"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationInputAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

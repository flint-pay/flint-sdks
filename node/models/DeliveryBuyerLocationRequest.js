import { d549 as c0, d557 as c1, d564 as c2, d555 as c3, d556 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d557 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d557;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationRequest"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec176"]:c3(),["SharedCodec177"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

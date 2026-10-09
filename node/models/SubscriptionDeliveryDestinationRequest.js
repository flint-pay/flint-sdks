import { d1853 as c0, d2350 as c1, d2351 as c2, d2352 as c3 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2352 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2352;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDeliveryDestinationAddressRequest"]:c0(),["SharedCodec582"]:c1(),["SharedCodec583"]:c2(),["SubscriptionDeliveryDestinationRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryDestinationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

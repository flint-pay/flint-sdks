import { d361 as c0, d1853 as c1, d2350 as c2, d2351 as c3, d2352 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d361 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d361;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateMeSubscriptionPreviewRequest"]:c0(),["OrderDeliveryDestinationAddressRequest"]:c1(),["SharedCodec582"]:c2(),["SharedCodec583"]:c3(),["SubscriptionDeliveryDestinationRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

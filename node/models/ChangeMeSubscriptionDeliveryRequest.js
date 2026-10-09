import { d139 as c0, d701 as c1, d1853 as c2, d2350 as c3, d2351 as c4, d2352 as c5, d2364 as c6 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d139 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d139;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ChangeMeSubscriptionDeliveryRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["OrderDeliveryDestinationAddressRequest"]:c2(),["SharedCodec582"]:c3(),["SharedCodec583"]:c4(),["SubscriptionDeliveryDestinationRequest"]:c5(),["SubscriptionDeliveryRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeChangeMeSubscriptionDeliveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

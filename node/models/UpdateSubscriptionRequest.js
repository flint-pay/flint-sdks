import { d701 as c0, d1853 as c1, d199 as c2, d200 as c3, d2350 as c4, d2351 as c5, d2352 as c6, d2364 as c7, d2558 as c8 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2558 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2558;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliverySelectionRecipientRequest"]:c0(),["OrderDeliveryDestinationAddressRequest"]:c1(),["SharedCodec34"]:c2(),["SharedCodec35"]:c3(),["SharedCodec582"]:c4(),["SharedCodec583"]:c5(),["SubscriptionDeliveryDestinationRequest"]:c6(),["SubscriptionDeliveryRequest"]:c7(),["UpdateSubscriptionRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

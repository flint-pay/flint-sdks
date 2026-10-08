import { d1853 as c0, d2350 as c1, d2351 as c2, d2352 as c3 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2352 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2352;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDeliveryDestinationAddressRequest"]:c0(),["SharedCodec582"]:c1(),["SharedCodec583"]:c2(),["SubscriptionDeliveryDestinationRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryDestinationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

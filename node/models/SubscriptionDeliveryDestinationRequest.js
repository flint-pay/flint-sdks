import { d1859 as c0, d1858 as c1, d1857 as c2, d2366 as c3, d2367 as c4, d2368 as c5 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2368 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2368;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDeliveryDestinationAddressRequest"]:c0(),["SharedCodec474"]:c1(),["SharedCodec475"]:c2(),["SharedCodec587"]:c3(),["SharedCodec588"]:c4(),["SubscriptionDeliveryDestinationRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryDestinationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

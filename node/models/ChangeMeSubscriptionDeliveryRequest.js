import { d139 as c0, d711 as c1, d1859 as c2, d1858 as c3, d1857 as c4, d2366 as c5, d2367 as c6, d2368 as c7, d2380 as c8 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d139 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d139;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ChangeMeSubscriptionDeliveryRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["OrderDeliveryDestinationAddressRequest"]:c2(),["SharedCodec474"]:c3(),["SharedCodec475"]:c4(),["SharedCodec587"]:c5(),["SharedCodec588"]:c6(),["SubscriptionDeliveryDestinationRequest"]:c7(),["SubscriptionDeliveryRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeChangeMeSubscriptionDeliveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

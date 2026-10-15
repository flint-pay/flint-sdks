import { d711 as c0, d1859 as c1, d199 as c2, d200 as c3, d1858 as c4, d1857 as c5, d2366 as c6, d2367 as c7, d2368 as c8, d2380 as c9, d2574 as c10 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2574 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2574;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliverySelectionRecipientRequest"]:c0(),["OrderDeliveryDestinationAddressRequest"]:c1(),["SharedCodec34"]:c2(),["SharedCodec35"]:c3(),["SharedCodec474"]:c4(),["SharedCodec475"]:c5(),["SharedCodec587"]:c6(),["SharedCodec588"]:c7(),["SubscriptionDeliveryDestinationRequest"]:c8(),["SubscriptionDeliveryRequest"]:c9(),["UpdateSubscriptionRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

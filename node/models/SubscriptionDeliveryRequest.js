import { d711 as c0, d1859 as c1, d1858 as c2, d1857 as c3, d2366 as c4, d2367 as c5, d2368 as c6, d2380 as c7 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2380 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2380;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliverySelectionRecipientRequest"]:c0(),["OrderDeliveryDestinationAddressRequest"]:c1(),["SharedCodec474"]:c2(),["SharedCodec475"]:c3(),["SharedCodec587"]:c4(),["SharedCodec588"]:c5(),["SubscriptionDeliveryDestinationRequest"]:c6(),["SubscriptionDeliveryRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

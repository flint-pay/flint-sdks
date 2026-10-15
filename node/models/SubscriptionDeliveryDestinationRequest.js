import { d1859 as c0, d1858 as c1, d1857 as c2, d2366 as c3, d2367 as c4, d2368 as c5 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2368 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2368;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDeliveryDestinationAddressRequest"]:c0(),["SharedCodec474"]:c1(),["SharedCodec475"]:c2(),["SharedCodec587"]:c3(),["SharedCodec588"]:c4(),["SubscriptionDeliveryDestinationRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryDestinationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }

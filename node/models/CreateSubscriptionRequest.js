import { d498 as c0, d711 as c1, d1859 as c2, d66 as c3, d494 as c4, d495 as c5, d497 as c6, d496 as c7, d199 as c8, d200 as c9, d1858 as c10, d1857 as c11, d2359 as c12, d2360 as c13, d2366 as c14, d2367 as c15, d2412 as c16, d2413 as c17, d2358 as c18, d2361 as c19, d2368 as c20, d2380 as c21, d2414 as c22 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d498 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d498;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["OrderDeliveryDestinationAddressRequest"]:c2(),["PostalAddress"]:c3(),["SharedCodec172"]:c4(),["SharedCodec173"]:c5(),["SharedCodec174"]:c6(),["SharedCodec175"]:c7(),["SharedCodec34"]:c8(),["SharedCodec35"]:c9(),["SharedCodec474"]:c10(),["SharedCodec475"]:c11(),["SharedCodec585"]:c12(),["SharedCodec586"]:c13(),["SharedCodec587"]:c14(),["SharedCodec588"]:c15(),["SharedCodec598"]:c16(),["SharedCodec599"]:c17(),["SubscriptionBillingScheduleRequest"]:c18(),["SubscriptionBillingStartRequest"]:c19(),["SubscriptionDeliveryDestinationRequest"]:c20(),["SubscriptionDeliveryRequest"]:c21(),["SubscriptionServiceLocationRequest"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
